// ========================================
// BABY SURPRISE WEBSITE
// HTML + CSS + JAVASCRIPT
// ========================================

// 100 natural Taglish messages for Baby
const messages = [
    "Baby, miss na kita. Wala lang, gusto ko lang sabihin. ♡",
    "Sana nandito ka ngayon. Kahit wala tayong gawin.",
    "Baby, may ikukwento sana ako kaso nakalimutan ko na. HAHAHA.",
    "Gusto lang kitang kausap. Kahit random lang topic natin.",
    "Alam mo, minsan bigla na lang kitang naiisip.",
    "Baby, kumain ka na ba? Wag puro cellphone, ha.",
    "Wish ko lang na sana okay ka today.",
    "Kung pagod ka, pahinga ka muna. Hindi ka robot, Baby.",
    "  `Baby, miss na kita. Wala lang, gusto ko lang sabihin sa'yo kahit alam kong minsan busy tayo sa mga kanya-kanya nating ginagawa. Minsan gusto lang talaga kitang makausap, kahit wala naman tayong importanteng topic. Kahit simpleng kwentuhan lang tungkol sa araw natin, masaya na ako. I hope you're doing okay today, Baby. Huwag mong kalimutang kumain at magpahinga kapag pagod ka na, ha? Take care of yourself palagi. Sana makita kita soon, kasi honestly, iba pa rin kapag ikaw mismo ang kasama ko. I miss you, Baby. ♡`,. ♡",
    "Baby, sana masarap ulam mo today. HAHAHA.",
    "Ang dami kong gustong ikwento sa'yo, kaso saan ba magsisimula?",
    "Baby, kahit simpleng kwentuhan lang, masaya na ako.",
    "Gusto sana kitang makita ngayon. Yun lang.",
    "Baby, don't forget to take care of yourself.",
    "Natawa ako sa isang bagay kanina, tapos ikaw naalala ko. Ewan ko ba. 😭",
    "Sana may magandang mangyari sa'yo today.",
    "Baby, good luck sa lahat ng ginagawa mo.",
    "Hindi mo kailangang mag-reply agad. Take your time, okay?",
    "Gusto kong malaman kung kumusta talaga araw mo.",
    "Baby, pahinga ka rin kapag may time ka.",
    "Minsan wala akong masabi, pero gusto pa rin kitang kausap.",
    "Baby, sana nandiyan ako para samahan ka ngayon.",
    "Random thought: miss na miss na kita. HAHAHA.",
    "Sana nakangiti ka habang binabasa mo 'to.",
    "Baby, ano na namang ginagawa mo diyan? HAHAHA.",
    "Gusto kong marinig pati yung mga random stories mo.",
    "Baby, don't be too hard on yourself, please.",
    "Kung may problema ka, hindi mo kailangang solohin lahat.",
    "Baby, I hope you're having a good day.",
    "Sana puwede kitang yayain gumala kahit walang plano.",
    "Baby, gusto kitang makasama kahit simpleng lakad lang.",
    "Hindi naman kailangan ng grand moments. Simple days are nice, too.",
    "Baby, sana hindi ka masyadong stressed ngayon.",
    "May times talaga na gusto lang kitang makita, no explanation needed.",
    "Baby, kain ka muna bago ka magpatuloy sa ginagawa mo.",
    "I hope may time kang gawin yung mga bagay na nagpapasaya sa'yo.",
    "Baby, gusto ko yung mga kwentuhang hindi natin namamalayang ang tagal na pala.",
    "Sana makapagpahinga ka nang maayos mamaya.",
    "Baby, update ka naman kapag may time ka. Miss na kita. ♡",
    "Wala akong importanteng sasabihin. Gusto lang kitang i-message.",
    "Baby, proud ako sa effort mo. Kahit small progress, progress pa rin.",
    "Sana maging mabait sa'yo ang araw na 'to.",
    "Baby, don't forget to drink water. Reminder lang. HAHAHA.",
    "Gusto kong marinig kung ano yung nagpapasaya sa'yo lately.",
    "Baby, sana may time ka rin para sa sarili mo.",
    "Minsan gusto kong sabihin lahat ng nasa isip ko, pero nahihiya ako. 😭",
    "Baby, I appreciate the little moments we share.",
    "Sana alam mong masaya akong makilala ka pa lalo.",
    "Baby, I hope you get enough sleep tonight.",
    "Kahit wala tayong mapag-usapan, gusto pa rin kitang kausap.",
    "Baby, miss ko na yung feeling na magkausap tayo.",
    "Sana may maikwento ka sa akin later. Kahit tungkol sa pagkain mo. HAHAHA.",
    "Baby, take your time sa lahat ng bagay.",
    "I like hearing about your day, kahit ordinary lang yung nangyari.",
    "Baby, sana hindi mo nakakalimutang maging proud sa sarili mo.",
    "Kung nandito ka lang, baka niyaya na kitang kumain. HAHAHA.",
    "Baby, I hope you're doing okay, genuinely.",
    "Minsan gusto ko lang itanong kung okay ka ba talaga.",
    "Baby, you can tell me about the good days and the bad ones, too.",
    "Sana may reason kang ngumiti bago matapos ang araw mo.",
    "Baby, thank you sa oras na binibigay mo sa akin.",
    "Gusto kong makilala pati yung mga little things about you.",
    "Baby, sana makuha mo yung mga bagay na pinaghihirapan mo.",
    "Kung pagod ka na, okay lang magpahinga muna.",
    "Baby, I hope tomorrow treats you better.",
    "Ang simple lang naman ng gusto ko ngayon: makausap ka. HAHAHA.",
    "Baby, sana hindi ka nagpupuyat nang sobra.",
    "I like it when we can talk about anything and everything.",
    "Baby, gusto kong marinig yung mga bagay na excited kang ikwento.",
    "Sana nakakakain ka nang maayos kahit busy ka.",
    "Baby, I hope you know that your feelings matter.",
    "Kahit simpleng good morning mo lang, nakakatuwa na.",
    "Baby, sana may time tayong magkwentuhan nang walang nagmamadali.",
    "I miss you, pero okay lang. I'll let you do your thing. ♡",
    "Baby, sana may magandang balita kang matanggap soon.",
    "Gusto ko yung feeling na unti-unti pa kitang nakikilala.",
    "Baby, sana hindi mo pinipilit ang sarili mo kapag pagod ka na.",
    "I hope you're surrounded by people who make you feel comfortable.",
    "Baby, ano kayang magandang gawin natin kapag nagkita tayo?",
    "Kahit simpleng tambay lang, parang masaya na basta okay tayong dalawa.",
    "Baby, I hope you get to smile today, kahit saglit lang.",
    "Sana may time ka para sa mga bagay na matagal mo nang gustong gawin.",
    "Baby, don't worry about having everything figured out.",
    "Gusto ko lang ipaalala na hindi mo kailangang maging perfect.",
    "Baby, I enjoy talking to you. Hindi ko naman kailangang pilitin.",
    "Sana mas marami kang happy moments this week.",
    "Baby, I hope you feel appreciated today.",
    "Minsan gusto kong mag-send ng random message, tapos ikaw agad naiisip ko.",
    "Baby, sana okay ang lahat ng ginagawa mo ngayon.",
    "I like our conversations, kahit minsan puro kalokohan lang. HAHAHA.",
    "Baby, kapag may gusto kang ikwento, makikinig ako kapag kaya ko.",
    "Sana makapagpahinga ka nang walang iniisip na deadlines kahit saglit.",
    "Baby, I hope you always make time for yourself, too.",
    "Miss na kita. Period. Wala nang dagdag. 😭",
    "Baby, sana mas marami pa tayong memories na mabuo.",
    "I appreciate you, even in the simplest ways.",
    "Baby, sana may masarap kang pagkain mamaya. Importante 'yan. HAHAHA.",
    "Kahit hindi araw-araw perfect, sana may something good pa rin sa bawat araw mo.",
    "Baby, gusto ko lang na masaya ka at inaalagaan mo rin sarili mo.",
    "Thank you for being someone I want to know more about.",
    "Baby, kung busy ka ngayon, good luck muna sa ginagawa mo. ♡",
    "At kung hindi mo pa alam, Baby, I love you. Miss na rin kita."

];

// Get the elements from the HTML
const startButton = document.getElementById("start-button");
const messageSection = document.getElementById("message-section");
const messageText = document.getElementById("message-text");
const messageNumber = document.getElementById("message-number");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const progressBar = document.getElementById("progress-bar");
const backToTopButton = document.getElementById("back-to-top");
const floatingHearts = document.getElementById("floating-hearts");

// Current message starts at the first one
let currentMessage = 0;

// Show the selected message
function showMessage() {
    messageText.style.opacity = "0";

    window.setTimeout(() => {
        messageText.textContent = messages[currentMessage];
        messageNumber.textContent =
            String(currentMessage + 1).padStart(2, "0") +
            " / " +
            messages.length;

        progressBar.style.width =
            ((currentMessage + 1) / messages.length) * 100 + "%";

        messageText.style.opacity = "1";
    }, 180);

    previousButton.disabled = currentMessage === 0;
    nextButton.textContent =
        currentMessage === messages.length - 1 ?
        "Start again ↻" :
        "Next message →";
}

// Open the messages section
startButton.addEventListener("click", () => {
    messageSection.classList.remove("hidden");
    showMessage();

    messageSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    createHeartBurst();
});

// Go to the previous message
previousButton.addEventListener("click", () => {
    if (currentMessage > 0) {
        currentMessage--;
        showMessage();
    }
});

// Go to the next message
nextButton.addEventListener("click", () => {
    if (currentMessage < messages.length - 1) {
        currentMessage++;
    } else {
        currentMessage = 0;
    }

    showMessage();
});

// Return to the animated heart
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Create one floating heart
function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 10 + Math.random() * 17 + "px";
    heart.style.animationDuration = 6 + Math.random() * 7 + "s";

    floatingHearts.appendChild(heart);

    // Remove the heart after its animation
    window.setTimeout(() => {
        heart.remove();
    }, 14000);
}

// Create floating hearts continuously
window.setInterval(createFloatingHeart, 700);

// Create several hearts when opening the surprise
function createHeartBurst() {
    for (let i = 0; i < 12; i++) {
        window.setTimeout(createFloatingHeart, i * 100);
    }
}

// Make sure there are exactly 100 messages
console.log("Baby's messages loaded:", messages.length);

if (messages.length !== 100) {
    console.warn("Please check the messages array. It should contain 100 messages.");
}

// Display the first message when the page loads
showMessage();

const musicButton = document.getElementById("music-button");
const musicFrame = document.getElementById("music-frame");

let musicPlaying = false;

musicButton.addEventListener("click", () => {
    if (!musicPlaying) {
        musicFrame.src =
            "https://www.youtube.com/embed/oZW3sXqfocA?autoplay=1";

        musicButton.textContent = "❚❚ Pause";
        musicPlaying = true;
    } else {
        musicFrame.src = "https://www.youtube.com/embed/oZW3sXqfocA";

        musicButton.textContent = "▶ Play";
        musicPlaying = false;
    }
});