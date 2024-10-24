const btn = document.querySelector("#btn");
const img = document.querySelector("#img");
const input = document.querySelector("#input");

const OPENAI_API_KEY = "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";

btn.addEventListener("click", async () => {
  if (input.value === "") {
    alert("Please enter a prompt!");
    return;
  }

  btn.disabled = true;

  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    body: JSON.stringify({
      prompt: input.value,
      n: 1,
      size: "1024x1024",
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization"   : `Bearer ${OPENAI_API_KEY}`,
    },
  });
  const data = await res.json();
  console.log(data);

//   input.value = "";
  img.src = data.images[0].url;

  btn.disabled = false;
//   img.src = "https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld"
});