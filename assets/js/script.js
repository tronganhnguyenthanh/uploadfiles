document.querySelector(".form-control").addEventListener("change", function(e){
  let files = e?.target?.files[0]
  let uploads = URL.createObjectURL(files)
  document.querySelector("#upload-file").innerHTML += `
   <details>
      <summary>${files?.name}</summary>
      <a href="${uploads}" download="${files?.name}">
        <p class="ml-5">Download files</p>
      </a>
   </details>
  `
})
