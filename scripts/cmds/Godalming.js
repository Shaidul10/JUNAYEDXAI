module.exports = {
        config: {
                name: "goiadmin",
                author: "𝗔𝗺𝗶𝗻𝘂𝗹 𝗦𝗼𝗿𝗱𝗮𝗿",
                role: 0,
                shortDescription: " ",
                longDescription: "",
                category: "BOT",
                guide: "{pn}"
        },

onChat: function({ api, event }) {
        if (event.senderID !== "100076343334427") {
                var aid = ["100076343334427"];
                for (const id of aid) {
                if ( Object.keys(event.mentions) == id) {
                        var msg = ["❁JUNAYED𖣘 বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল ❁JUNAYED𖣘 রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না ❁Junayed𖣘 প্রচুর বিজি 🥵🥀🤐"];
                        return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
                }
                }}
},
onStart: async function({}) {
        }
};