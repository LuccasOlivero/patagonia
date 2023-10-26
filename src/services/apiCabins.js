import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath =
    "https://eiyahyupkcgjshtwwlli.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTY5ODA5MDczNCwiZXhwIjoxNjk4Njk1NTM0fQ.jyu7Wg4OLGHLkpr7nN5s-J4-TKMcDF7OUKMXkdnaivQ&t=2023-10-23T19%3A52%3A17.403Z";

  // https://eiyahyupkcgjshtwwlli.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTY5ODA5MDczNCwiZXhwIjoxNjk4Njk1NTM0fQ.jyu7Wg4OLGHLkpr7nN5s-J4-TKMcDF7OUKMXkdnaivQ&t=2023-10-23T19%3A52%3A17.403Z

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // delete cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could no be uploaded and the cabin was no created"
    );
  }

  return data;
}
