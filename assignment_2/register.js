const isValidToSubmit = () => {
    let companyName = document.getElementById("companyName");
    let contactPerson = document.getElementById("contactPerson");
    let contactNumber = document.getElementById("contactNumber");
    let chairAmount = document.getElementById("chairAmount");

    companyName.classList.remove("invalid-input");
    contactPerson.classList.remove("invalid-input");
    contactNumber.classList.remove("invalid-input");
    chairAmount.classList.remove("invalid-input");

    if (companyName.value == "") {
        alert("โปรดระบุชื่อบริษัทของคุณ (Please specify your company name)");
        companyName.classList.add("invalid-input");
        return false;
    }
    if (chairAmount.value == "" || chairAmount.value < 1 || chairAmount.value > 10 || chairAmount.value % 1 != 0) {
        alert("โปรดระบุค่าตัวเลขตั้งแต่ 1 ถึง 10 (Please specify a number between 1 and 10)");
        chairAmount.value = "";
        chairAmount.classList.add("invalid-input");
        return false;
    }
    if (contactPerson.value == "") {
        alert("โปรดระบุชื่อผู้ติดต่อ (Please specify your contact name)");
        contactPerson.classList.add("invalid-input");
        return false;
    }
    if (contactNumber.value == "") {
        alert("โปรดระบุเบอร์โทรผู้ติดต่อ (Please specify your contact phone number)");
        contactNumber.classList.add("invalid-input");
        return false;
    }
    alert("ลงทะเบียนสำเร็จ !");
    window.location.href = "./index.html";
    return false;
}