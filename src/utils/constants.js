const Profile = {
    name: "N V Harish",
    phone: "+91 9337967318",
    email: "nv.harish@outlook.com",
    website: "https://nvharish.com",
    designation: "Full Stack Engineer",
    photo: "user-3.jpg"
}

export const SocialAccount = {
    linkedin: {
        url: "https://www.linkedin.com/in/nvharish/",
        icon: "icon-linkedin2"
    },
    github: {
        url: "https://github.com/nvharish",
        icon: "icon-github2"
    }
}

export const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

export default Profile;