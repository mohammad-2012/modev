import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Hi, I'm",
      name: "Mohammad Akbari",
      about:
        "I'm a front-end developer passionate about building beautiful and efficient user experiences. With React, Next.js, and modern web tools, I turn ideas into reality.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      aboutMe: {
        title: "Know More",
        subtitle: "About Me",
        description:
          "Let me introduce myself and share my journey in the world of programming",
        personalInfo: "Personal Info",
        myJourney: "My Journey",
        mySkills: "My Skills",
        currently: "Currently:",
        movingTo: "Moving toward Full-Stack Development",
        quote:
          "The only limit to our realization of tomorrow is our doubts of today.",
        quoteAuthor: "- Keep coding, keep growing -",
      },
      skills: {
        title: "What I",
        subtitle: "Can Do",
        description:
          "Here are my technical skills and expertise in web development",
        overall: "Overall Skills",
        problemSolving: "Problem Solving",
        cleanCode: "Clean Code",
        responsiveDesign: "Responsive Design",
        teamWork: "Team Work",
        quote:
          "Always learning, always growing. Every line of code is a step forward.",
      },
      contact: {
        title: "Get In",
        subtitle: "Touch",
        description:
          "Have a question or want to work together? Feel free to reach out!",
        phone: "Phone",
        email: "Email",
        telegram: "Telegram",
        optional: "optional",
        github: "GitHub",
        location: "Location",
        responseTime: "Response Time",
        followMe: "Follow Me",
        sendMessage: "Send Me a Message",
        yourName: "Your Name",
        emailAddress: "Email Address",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        successMessage: "✅ Message sent successfully!",
        errorMessage: "❌ Failed to send message. Please try again.",
        connectionError: "❌ Connection error. Please try again later.",
      },
      nav: {
        home: "Home",
        aboutMe: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      timeline: {
        title: "My Journey Timeline",
        startedWordPress: "Started with WordPress",
        startedWordPressDesc:
          "Began my journey with WordPress, learning how to build websites easily.",
        switchedToProgramming: "Switched to Programming",
        switchedToProgrammingDesc:
          "Found my true passion in coding. Started learning HTML, CSS, and Bootstrap deeply.",
        javascriptTailwind: "JavaScript and TailwindCSS",
        javascriptTailwindDesc:
          "Mastered JavaScript, TailwindCSS, and responsive design principles.",
        reactModern: "React.js and Modern Frameworks",
        reactModernDesc:
          "Started learning React.js, Next.js, Redux, and React Query. Building dynamic web apps.",
        fullStack: "Full-Stack Journey",
        fullStackDesc:
          "Learning Node.js, Express, and databases. Moving toward Full-Stack Development.",
      },
      myJourney: {
        text1: "I started my programming journey ",
        highlight1: "1.5 years ago",
        text1_2:
          " at the age of 12. It was a challenging path filled with obstacles, but my passion for coding kept me going.",
        text2:
          "Today, I'm proud to say that I've overcome those difficulties and become a ",
        highlight2: " Front-End Developer",
        text2_2:
          " with strong skills in modern web technologies. I'm now on an exciting journey toward becoming a ",
        highlight3: " Full-Stack Developer",
        text2_3: ".",
      },
      certificates: {
        title: "My Certificates",
        htmlCss: "HTML & CSS Certificate",
        cssAdvanced: "CSS Advanced Certificate",
        uiux: "UI/UX Design Certificate",
        cybersecurity: "Cybersecurity & Hacking Certificate",
      },
      comingSoon: {
        title: "Coming Soon",
        description: "This section is under development.",
        description2: "I'm working hard to bring something amazing for you!",
        note: "Due to the blocking of sites like Vercel & GitHub, this section will be completed soon.",
      },
    },
  },
  fa: {
    translation: {
      welcome: "سلام، من",
      name: "محمد اکبری هستم",
      about:
        "من یک توسعه‌دهنده فرانت‌اند هستم که به ساخت تجربه‌های کاربری زیبا و کارآمد علاقه دارم. با استفاده از React، Next.js و ابزارهای مدرن وب، ایده‌ها را به واقعیت تبدیل می‌کنم.",
      viewProjects: "مشاهده پروژه‌ها",
      contactMe: "تماس با من",
      aboutMe: {
        title: "بیشتر بدانید",
        subtitle: "درباره من",
        description:
          "اجازه دهید خودم را معرفی کنم و سفرم را در دنیای برنامه‌نویسی به اشتراک بگذارم",
        personalInfo: "اطلاعات شخصی",
        myJourney: "سفر من",
        mySkills: "مهارت‌های من",
        currently: "در حال حاضر:",
        movingTo: "در حال حرکت به سوی توسعه فول‌استک",
        quote: "تنها محدودیت برای تحقق فردا، شک‌های امروز ماست.",
        quoteAuthor: "- به کدنویسی ادامه بده، به رشد ادامه بده -",
      },
      skills: {
        title: "چیزی که",
        subtitle: "می‌توانم انجام دهم",
        description:
          "در اینجا مهارت‌ها و تخصص فنی من در توسعه وب آورده شده است",
        overall: "مهارت‌های کلی",
        problemSolving: "حل مسئله",
        cleanCode: "کد تمیز",
        responsiveDesign: "طراحی واکنش‌گرا",
        teamWork: "کار تیمی",
        quote:
          "همیشه در حال یادگیری، همیشه در حال رشد. هر خط کد یک قدم به جلو است.",
      },
      contact: {
        title: "در ارتباط",
        subtitle: "باشید",
        description:
          "سوالی دارید یا می‌خواهید با هم کار کنید؟ با خیال راحت با من تماس بگیرید!",
        phone: "تلفن",
        email: "ایمیل",
        telegram: "تلگرام",
        github: "گیت‌هاب",
        location: "موقعیت",
        responseTime: "زمان پاسخگویی",
        followMe: "دنبال کنید",
        sendMessage: "برای من پیام بفرست",
        yourName: "نام شما",
        emailAddress: "آدرس ایمیل",
        message: "پیام",
        send: "ارسال پیام",
        sending: "در حال ارسال...",
        successMessage: "✅ پیام شما با موفقیت ارسال شد!",
        errorMessage: "❌ ارسال پیام ناموفق بود. لطفاً دوباره تلاش کنید.",
        connectionError: "❌ خطا در ارتباط. لطفاً بعداً تلاش کنید.",
        optional: "اختیاری",
      },
      nav: {
        home: "خانه",
        aboutMe: "درباره من",
        skills: "مهارت‌ها",
        projects: "پروژه‌ها",
        contact: "تماس",
      },
      timeline: {
        title: "خط زمانی سفر من",
        startedWordPress: "شروع با وردپرس",
        startedWordPressDesc:
          "سفر خود را با وردپرس آغاز کردم و یاد گرفتم چگونه به راحتی وب‌سایت بسازم.",
        switchedToProgramming: "تغییر مسیر به برنامه‌نویسی",
        switchedToProgrammingDesc:
          "علاقه واقعی خود را در کدنویسی پیدا کردم. یادگیری عمیق اچ‌تی‌ام‌ال، سی‌اس‌اس و بوت‌استرپ را شروع کردم.",
        javascriptTailwind: "جاوااسکریپت و تیلویند",
        javascriptTailwindDesc:
          "به جاوااسکریپت، تیلویندسی‌اس‌اس و اصول طراحی واکنش‌گرا مسلط شدم.",
        reactModern: "ری‌اکت و فریم‌ورک‌های مدرن",
        reactModernDesc:
          "شروع به یادگیری ری‌اکت، نکست، ریداکس و ری‌اکت کوئری کردم. ساخت اپلیکیشن‌های پویا.",
        fullStack: "سفر به سمت فول‌استک",
        fullStackDesc:
          "یادگیری نود.جی‌اس، اکسپرس و پایگاه‌های داده. حرکت به سمت توسعه فول‌استک.",
      },
      myJourney: {
        text1: "سفر برنامه‌نویسی خود را ",
        highlight1: "یک سال و نیم پیش",
        text1_2:
          " در سن ۱۲ سالگی آغاز کردم. این مسیر پر از چالش‌ها و موانع بود، اما عشق من به کدنویسی مرا ادامه داد.",
        text2:
          "امروز با افتخار می‌گویم که بر آن دشواری‌ها غلبه کرده‌ام و به یک ",
        highlight2: "توسعه‌دهنده فرانت‌اند",
        text2_2:
          " با مهارت قوی در فناوری‌های مدرن وب تبدیل شده‌ام. اکنون در سفری هیجان‌انگیز به سوی تبدیل شدن به یک ",
        highlight3: "توسعه‌دهنده فول‌استک",
        text2_3: " هستم.",
      },
      certificates: {
        title: "گواهینامه‌های من",
        htmlCss: "گواهینامه اچ‌تی‌ام‌ال و سی‌اس‌اس",
        cssAdvanced: "گواهینامه پیشرفته سی‌اس‌اس",
        uiux: "گواهینامه طراحی یوآی/یوایکس",
        cybersecurity: "گواهینامه امنیت سایبری و هک",
      },
      comingSoon: {
        title: "به زودی",
        description: "این بخش در حال توسعه است.",
        description2: "من سخت کار می‌کنم تا چیز شگفت‌انگیزی برای شما بیاورم!",
        note: "به دلیل مسدود بودن سایت‌هایی مانند ورسل و گیت‌هاب، این بخش به زودی کامل خواهد شد.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
