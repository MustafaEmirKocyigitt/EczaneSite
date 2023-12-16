function giris() {
    let mail = document.form.email.value,
      pass = document.form.password.value;

    const users = [
      "olgu@mail.com",
      "1239826",
      "serkay@mail.com",
      "2348931",
      "emir@mail.com",
      "345",
      "mert@mail.com",
      "456",
      "ayyat@mail.com",
      "567",
      "burak@gmail.com",
      "678",
      "umut@gmail.com",
      "789",
      "fatih@gmail.com",
      "987",
      "batuhan@gmail.com",
      "5236478",
      "sena@gmail.com",
      "985314"
    ];

    for (var i = 0; i < users.length; i++) {
      if (i % 2 == 0) {
        if (mail == users[i] && pass == users[i + 1]) {
          window.location.href = "index.html";
          window.localStorage.setItem("auth", "ok");
        }
      }
    }
  }