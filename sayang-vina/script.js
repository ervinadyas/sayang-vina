function goToProfile() {
    document.getElementById("loginBox").classList.remove("active");
    document.getElementById("profileBox").classList.add("active");
    const name = document.getElementById("name").value;
    document.getElementById("profileName").innerText = name || "Pacar Tersayang";
  }
  
  function goToInteraction() {
    document.getElementById("profileBox").classList.remove("active");
    document.getElementById("interactionBox").classList.add("active");
  }
  
  function goToNo() {
    document.getElementById("interactionBox").classList.remove("active");
    document.getElementById("noBox").classList.add("active");
  }
  
  function goToYes() {
    document.getElementById("interactionBox").classList.remove("active");
    document.getElementById("yesBox").classList.add("active");
  }
  
  function goToFinal() {
    document.getElementById("noBox").classList.remove("active");
    document.getElementById("yesBox").classList.remove("active");
    document.getElementById("finalBox").classList.add("active");
  }
  // Navigasi antar halaman
function goToProfile() {
    document.getElementById("loginBox").classList.remove("active");
    document.getElementById("loginBox").classList.add("hidden");
  
    document.getElementById("profileBox").classList.remove("hidden");
    document.getElementById("profileBox").classList.add("active");
  }
  
  function goToInteraction() {
    document.getElementById("profileBox").classList.remove("active");
    document.getElementById("profileBox").classList.add("hidden");
  
    document.getElementById("interactionBox").classList.remove("hidden");
    document.getElementById("interactionBox").classList.add("active");
  }
  // Script untuk mengontrol musik
function toggleMusic() {
    const music = document.getElementById("profileMusic");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  
  function goToInteractionAndPlayMusic() {
    // Menyembunyikan halaman profil
    const profileBox = document.getElementById("profileBox");
    profileBox.classList.add("hidden");
  
    // Menampilkan halaman interaksi
    const interactionBox = document.getElementById("interactionBox");
    interactionBox.classList.remove("hidden");
  
    // Memulai pemutaran musik setelah interaksi pengguna
    const audio = document.getElementById("backgroundMusic");
    audio.play().catch(error => {
      console.error("Autoplay diblokir oleh browser:", error);
    });
  }
  function playMusic() {
    const audio = document.getElementById("additionalMusic");
    // Periksa apakah audio sedang diputar
    if (audio.paused) {
        audio.play().catch(error => {
            console.error("Autoplay diblokir:", error);
        });
    } else {
        audio.pause(); // Jika diputar, hentikan
    }
}

