const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('봇이 켜졌습니다!');
  client.user.setPresence({ game: { name: '!도움'}, status: 'online' })
});


client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '!dwafawfawf') {
    return message.reply('2ms');
  }

  if(message.content == '!날씨') {
    let img = '';
    let embed = new Discord.RichEmbed()
      .setTitle(':white_sun_cloud: 인천광역시 부평의 오늘날씨')
      .addField('**온도**', '최저 20도\n최고26도', true)
      .addField('**체감온도**', '30.2도', true)
      .addField('**습도**', '최저 55도\n최고85도', true)
      .addField('**날씨**', '맑음', true)
      .addField('**미세먼지**', '보통(36)', true)
      .addField('**초미세먼지**', '좋음(15)', true)
      .setColor('#F5FF00')
      .setFooter('2020년 07월 16일 기준입니다', img)

      message.channel.send(embed)
    } else if(message.content == '!한강물온도') {
        let img = '';
        let embed = new Discord.RichEmbed()
          .setTitle(':ocean: 현재 한강물의 온도')
          .addField('**한강물의 온도**', '23.8', true)
          .setColor('#0011ff')
          .setFooter('2020년 07월 16일 기준입니다.', img)

      message.channel.send(embed)
    } else if(message.content == '!코로나') {
        let img = '';
        let embed = new Discord.RichEmbed()
          .setTitle('코로나-19 한국 현황')
          .addField('**데이터 출처 : Ministry of Health and Welfare of Korea**', 'http://ncov.mohw.go.kr/index.jsp', true)
          .addField('**최신 데이터**', '해당 자료는 2020년 7월 16일 00시 기준 자료입니다.')
          .addField('**확진환자(누적)**', '13,612(+ 61)', true)
          .addField('**완치환자(격리해제)**', '12,396(+ 48)', true)
          .addField('**치료중(격리 중)**', '925(+ 11)', true)
          .addField('**사망**', '291(+ 2)', true)
          .addField('**누적확진률**', '1.0 %', true)
          .addField('**치사율**', '2.14 %', true)
          .addField('**- 최신 브리핑 1 : 코로나바이러스감염증-19 국내 발생 현황 (7월 16일 0시)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355439')
          .addField('**- 최신 브리핑 2 : 코로나바이러스감염증-19 국내 발생 현황 (7월 15일 정례브리핑)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355430')
          .setColor('#6799FF')
          .setFooter('BOT MADE BY RABBIT', img)
          
          
      message.channel.send(embed)
    } else if(message.content == '!재난문자') {
        let img = '';
        let embed = new Discord.RichEmbed()
          .setTitle(':loudspeaker: 재난문자')
          .addField('**데이터 출처 : 대한민국 재난안전포털**', 'https://www.safekorea.go.kr/idsiSFK/neo/main_m/dis/disasterDataList.html')
          .addField('**2020/07/16 11:22:13 재난문자[대전중구]**', '[대전중구] (7월15일) 코로나 검사자 21명 전원 음성(정상)입니다. 앞으로는 확진자 발생시만 재난문자를 발송하겠습니다.')
          .addField('**2020/07/16 11:14:40 재난문자[서초구청]**', '[서초구청] 타지역 확진자(2명) 동선 홈페이지(seocho.go.kr) 공개. 소모임 자제, 거리두기, 마스크 착용 등 위생수칙 철저히 준수바랍니다.')
          .addField('**2020/07/16 10:50:50 재난문자[목포시청]**', '[목포시청] 가정,직장 방문 판매로 코로나19 감염자가 발생되고 있습니다. 화장품 등 방문판매(접촉) 금지와 마스크 착용을 생활화합시다.')
          .setColor('#FF0000#FF0000')
          .setFooter('최근 발송된 3개의 재난문자를 보여줍니다', img)

    message.channel.send(embed)
  } else if(message.content == '!오늘의 운세') {
      const Random = ["오늘은 몸조심 하세요.","오늘은 입조심 하세요.","오늘은 사기당하지않게 조심하세요.","오늘은 실망스러운 일이 일어날 수 있습니다.","오늘은 순조로운 날이 될거에요.","오늘은 기쁨이 가득할거에요.","오늘은 겸손하게 행동하세요.","오늘은 다른 이성에게 고백해보세요.","오늘은 돈이 생길수도 있습니다.","오늘은 일이 잘 풀리지 않을수있습니다.","오늘은 밖에 되도록 나가지 마세요.","오늘은 소원이 이루어질수 있습니다.","오늘은 연상의 연인을 만나게 되는날입니다.","오늘은 연하의 연인을 만나게 되는날입니다.","오늘은 일이 잘 풀리는 날입니다.","오늘은 힘을 사용하는 일을 하지마세요.","오늘은 까실이가 밥을 사줄수도 있어요.","채팅치시다가 점멸 누르지 마세요!","오늘은 왠지 채팅치다가 궁쓸거 같아요ㅠㅠ","노빠꾸로 가시죠!","사릴줄도 알아야 해요!","오늘은 정치질 조심하세요!","오늘 의상은 길거리에서 커플들이 싸울때 구경하면서 지나가는 사람을 구경할것 같은 의상이군요!","밤 길 조심하세요!","미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..","당신은 이 문자를 발견하셨어요 1/69 의 확률로 나오는 이 문자는 발견시 박준서 키스권을 드립니다!","오늘 의상은 길가는 찐다를 보고 혐오하는 사람을 짝사랑 하던 사람을 구경하던 사람의 친구같은 의상이에요! 아주 완벽하지만 완벽하지 않아요!","오늘은 따뜻하지만 차갑고 뜨거운 아이스 라떼를 먹는건 어떨까요?","내 눈을 바라봐","오늘은 운동을 해봐요!","피하지 말고 즐기세요","오늘은 취킨을 먹을거 같군요!","오늘은 길 가다가 물웅덩이에 빠질것 같군요! 라는 애니 추천좀"]
      const Real = Random[Math.floor(Math.random()*Random.length) + 1]
      let img = '';
      let user_name = message.author.username
      const Embed = new Discord.RichEmbed()
        .setFooter(user_name + "님의 오늘의 운세", img)
        .setTitle(Real)

    message.channel.send(Embed)
  } else if(message.content == '!ping') {
      const Random = ["43ms","41ms","31ms","22ms","53ms","26ms","43ms","41ms","31ms","22ms","53ms","26ms","43ms","41ms","31ms","22ms","53ms","26ms","43ms","41ms","31ms","22ms","53ms","26ms"]
      const Real = Random[Math.floor(Math.random()*Random.length) + 1]
      const Embed = new Discord.RichEmbed()
        .setFooter('BOT MADE BY RABBIT')
        .setTitle(Real)

    message.channel.send(Embed)
  } else if(message.content == '!도움') {
      let helpImg = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
      let commandList = [
        {name: '!도움', desc: '도움!'},
        {name: '!코로나', desc: '코로나!'},
        {name: '!재난문자', desc: '최근 재난문자 3개를 보여줍니다!'},
        {name: '!날씨', desc: '오늘의 날씨 보기!'},
        {name: '!한강물온도', desc: '한강물의 온도 보기!'},
        {name: '!청소 (관리자)', desc: '텍스트 지우기!'},
        {name: '!오늘의 운세', desc: '오늘의 운세를 보여줍니다'},
    ];
      let commandStr = '';
      let embed = new Discord.RichEmbed()
        .setAuthor('도움', helpImg)
        .setColor('#ff00df')
        .setFooter(`BOT MADE BY RABBIT`)
        commandList.forEach(x => {
          commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
        });

    embed.addField('명령어: ', commandStr);
   
    message.channel.send(embed)
  } else if(message.content.startsWith('!청소')) {
    if(message.channel.type == 'dm') {
      return message.reply('DM에서 사용할 수 없는 명령어 입니다!');
    }
    
    if(message.channel.type != 'dm' && checkPermission(message)) return

    var clearLine = message.content.slice('!청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 50 < clearLine)) {
      message.channel.send("1부터 50까지의 숫자만 입력해주세용!")
      return;
    } else if(!isNum) {
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        let _cnt = 0;

        message.channel.fetchMessages().then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니당! (잠시후 사라집니당!)");
        })
        .catch(console.error)
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "당신은 관리자 권한이 없습니다!")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}


client.login(token);
