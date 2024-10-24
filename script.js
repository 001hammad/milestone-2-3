var form = document.getElementById('resume-form');
var resumeContainer = document.getElementById('resume-container');
var profilePic = document.getElementById('picture');
var ResumeForm = {
    name: '',
    email: '',
    phone: '',
    address: '',
    degree: '',
    institute: '',
    skills: '',
    experience: '',
    picture: '',
};
form.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var formData = new FormData(form);
    ResumeForm.name = formData.get('name');
    ResumeForm.email = formData.get('email');
    ResumeForm.phone = formData.get('phone');
    ResumeForm.address = formData.get('address');
    ResumeForm.degree = formData.get('degree');
    ResumeForm.institute = formData.get('institute');
    ResumeForm.skills = formData.get('skills');
    ResumeForm.experience = formData.get('experience');
    ResumeForm.picture = ((_a = profilePic.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilePic.files[0]) : '';
    generateResume();
});
function generateResume() {
    var ResumeHTML = "\n      <h1 class='your-resume'>Your Dynamic Resume</h1>\n      <img src=\"".concat(ResumeForm.picture, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\" class='photo'>\n      <h2>Personal Information</h2>\n      <p class='out'><b>Name:</b> ").concat(ResumeForm.name, "</p>\n      <p class='out'><b>Email:</b> ").concat(ResumeForm.email, "</p>\n      <p class='out'><b>Phone:</b> ").concat(ResumeForm.phone, "</p>\n      <p class='out'><b>Address:</b> ").concat(ResumeForm.address, "</p><hr>\n      <h2>Education</h2>\n      <p class='out'><b>Degree:</b> ").concat(ResumeForm.degree, "</p>\n      <p class='out'><b>Institute:</b> ").concat(ResumeForm.institute, "</p><hr>\n      <h2>Skills</h2>\n      <p class='out'>").concat(ResumeForm.skills, "</p>\n      <p class='out'>").concat(ResumeForm.skills, "</p>\n      <p class='out'>").concat(ResumeForm.skills, "</p><hr>\n      <h2>Work Experience</h2>\n      <p class='out'>").concat(ResumeForm.experience, "</p>\n    ");
    resumeContainer.innerHTML = ResumeHTML;
}
