const nav = document.getElementById("nav");
const topbtn = document.getElementById("to-top");
const myname = document.getElementById("myname");
window.addEventListener("scroll", () => {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
    topbtn.classList.remove("d-none");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
    topbtn.classList.add("d-none");
  }
});

const checkPilihJabatan = () => {
  if ($("#pil_ketua").is(":checked")) {
    $("#choose_ketua").addClass("active");
    $("#choose_anggota").removeClass("active");
    $("#syarat_ketua").show();
    $("#syarat_anggota").hide();
    $("#form_ketua").show();
    $("#form_anggota").hide();
  }
  if ($("#pil_anggota").is(":checked")) {
    $("#choose_anggota").addClass("active");
    $("#choose_ketua").removeClass("active");
    $("#syarat_anggota").show();
    $("#syarat_ketua").hide();
    $("#form_ketua").hide();
    $("#form_anggota").show();
  }
};
$('input[name="osis_jabatan"]').change(checkPilihJabatan);

$(document).ready(function () {
  checkPilihJabatan();
  $("#loading").addClass("hide");

  new Typed("#myname", {
    strings: ["Calon Pengurus OSIS"],
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 2000,
    // backspacing speed
    // show cursor
    showCursor: true,
    contentType: "html",
  });
});

$("#choose_ketua").click(function () {
  $("#pil_ketua").prop("checked", true);
  $("#pil_anggota").prop("checked", false);
  checkPilihJabatan();
});
$("#choose_anggota").click(function () {
  $("#pil_anggota").prop("checked", true);
  $("#pil_ketua").prop("checked", false);
  checkPilihJabatan();
});
