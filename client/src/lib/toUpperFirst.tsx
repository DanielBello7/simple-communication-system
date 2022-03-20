


export default function toUpperFirst(data: string | undefined): string {
  if (!data) return "";
  const first_letter = data[0].toLocaleUpperCase();
  let new_word: string = "";
  new_word += first_letter;
  for (let i = 0; i < data.length; i++) 
    if (i !== 0) new_word += data[i];
  return new_word;
}