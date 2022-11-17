function submitForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value
   
  
    if (name === "") {
      return alert('Namanya harus diisi bos!!');
    } else if (email === "") {
        return alert("Gak boleh kosong nih!")
    } else if (phone === "") {
        return alert("Nanti hubungi kamu gmn?")
    } else if (subject === "") {
        return alert("Diisi ya")
    } else if (message === "") {
        return alert("Pesan dari hatimu gak boleh kosong dong.")
    }

    const emailReciver = 'rhomairama.dev@gmail.com';

    const a = document.createElement('a');

    a.href = `mailto:${emailReciver}?subject=${subject}&body=Hallo, Nama Saya : ${name},No hp kamu : ${phone},Kamu Memilih : ${subject},Pesan Kamu : ${message}`;
    a.target = '_blank';
    a.click();

    let dataObject = {
       name,
       email,
       phone,
       subject,
       message,
      };
      console.log(dataObject);

}