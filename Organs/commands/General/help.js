module.exports = {
    name: "help",
    alias: ["h","menu"],
    desc: "List all command",
    category: "General",
    react:"✅",
    start: async(client, m, { commands, args, prefix, text, toUpper }) => {
        
       
   const { pushName , sender } = m
        if (args[0]) {
            let data = []
            let name = args[0].toLowerCase()
            let cmd = commands.get(name) || Array.from(commands.values()).find((v) => v.alias.includes(name))
            if (!cmd || cmd.type == "hide") return m.reply("No Command Found")
            else data.push(`*🍁Command :* ${cmd.name.replace(/^\w/, c => c.toUpperCase())}`)
            if (cmd.alias) data.push(`*👾Alias :* ${cmd.alias.join(", ")}`) 
            if(cmd.cool) data.push(`*⏱️Cooldown:* ${cmd.cool}`)       
            if (cmd.desc) data.push(`*🧾Description :* ${cmd.desc}`)
            if (cmd.usage) data.push(`*💡Example :* ${cmd.usage.replace(/%prefix/gi, prefix).replace(/%command/gi, cmd.name).replace(/%text/gi, text)}`)
            var buttonss = [
				{buttonId: `${prefix}help`, buttonText: {displayText: `help`}, type: 1},]
            let buth={
                text:`*ℹ️Command Info*\n\n${data.join("\n")}`,
                footer:"*©Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ-Team*",
                buttons:buttonss,
                headerType:1
            }    
            return client.sendMessage(m.from,buth,{quoted:m})
        } else {
           const { pushName, sender } = m
let cm=commands.keys()
            let category=[];
             

            for (let cmd of cm) {
                let info = commands.get(cmd);
                if (!cmd) continue;
                if (!info.category || info.category === 'private') continue;
                if (Object.keys(category).includes(info.category)) category[info.category].push(info);
                else {
                    category[info.category] = [];
                    category[info.category].push(info);
                }
            }
            const emo=["📖","🍁","🍀","🌊","🎵","🔞","🎟","♨️","🉐",]
        
            let txt = `*Kon'nichiwa (｡♡‿♡｡)* ${pushName} Watashiwa *Hanako*.
                       
🧧 *Prefix :* [ ${prefix} ]
                       
📝 Here's the *Commands* listed below :\n\n`
        const keys = Object.keys(category);
        for (const key of keys) {
            txt += `*${key.toUpperCase()} ${emo[keys.indexOf(key)]} :* \`\`\`${category[key]
                .map((cmd) => cmd.name).join(" | ")}\`\`\`\n\n`
        }
        txt += `📗 *Type ${prefix}help <Command-Name> or <Command-Name> --info*\n\n`; 
        txt += `*©Ɇ𝖙𝖊𝖗𝖓𝖎𝖙ɏ-Team*`
    const eternitylogo = 'https://www.bing.com/videos/search?q=hanako+anime+edit&&view=detail&mid=FE80255EEDAB49AC4BD1FE80255EEDAB49AC4BD1&&FORM=VRDGAR'
    client.sendMessage(m.from,{video:{url:eternitylogo}, gifPlayback:true, caption:txt},{quoted:m})
        //client.sendMessage(m.from,{text:txt},{quoted:m})

     }
  }
}


