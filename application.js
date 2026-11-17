const hello = document.getElementById("hello");
const information = document.getElementById("information");
const secondText = document.getElementById("secondText");

async function startAnimation() {

    // مرحله اول: hello از پایین وارد می‌شود و محو می‌شود
    await hello.animate([
        {
            transform: "translate(-50%, 100vh)",
            opacity: 0
        },
        {
            transform: "translate(-50%, -50%)",
            opacity: 1,
            offset: 0.4
        },
        {
            transform: "translate(-50%, -50%)",
            opacity: 1,
            offset: 0.7
        },
        {
            transform: "translate(-50%, -50%)",
            opacity: 0
        }
    ], {
        duration: 4000,
        fill: "forwards",
        easing: "ease-in-out"
    }).finished;


    // مرحله دوم: INFORMATION از چپ وارد می‌شود
    await information.animate([
        {
            transform: "translate(-150vw, -50%)",
            opacity: 0
        },
        {
            transform: "translate(-50%, -50%)",
            opacity: 1
        }
    ], {
        duration: 2500,
        fill: "forwards",
        easing: "ease-out"
    }).finished;


    // مرحله سوم: متن دلخواه از راست وارد می‌شود
    await secondText.animate([
        {
            transform: "translate(150vw, -50%)",
            opacity: 0
        },
        {
            transform: "translate(-50%, -50%)",
            opacity: 1
        }
    ], {
        duration: 2000,
        fill: "forwards",
        easing: "ease-out"
    }).finished;

}

startAnimation();