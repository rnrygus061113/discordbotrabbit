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
    let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
    let embed = new Discord.RichEmbed()
      .setTitle(':white_sun_cloud: 인천광역시 부평의 오늘날씨')
      .addField('**온도**', '최저 21도\n최고27도', true)
      .addField('**체감온도**', '19.3도', true)
      .addField('**습도**', '최저 65도\n최고85도', true)
      .addField('**날씨**', '맑음', true)
      .addField('**미세먼지**', '보통(32)', true)
      .addField('**초미세먼지**', '좋음(15)', true)
      .setColor('#F5FF00')
      .setFooter('2020년 07월 17일 기준입니다', img)

      message.channel.send(embed)
    } else if(message.content == '!한강물온도') {
        let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
        let embed = new Discord.RichEmbed()
          .setTitle(':ocean: 현재 한강물의 온도')
          .addField('**한강물의 온도**', '24.1도', true)
          .setColor('#0011ff')
          .setFooter('2020년 07월 17일 기준입니다.', img)



      message.channel.send(embed)

              } else if(message.content == '!코로나') {
                  let helpImg = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
                  let commandList = [
                    {name: '!코로나 전국', desc: '코로나 전국'},
                    {name: '!코로나 서울', desc: '코로나 서울'},
                    {name: '!코로나 인천', desc: '코로나 인천'},
                    {name: '!코로나 경기', desc: '코로나 경기'},
                    {name: '!코로나 순위', desc: '코로나 순위'},
                ];
                  let commandStr = '';
                  let embed = new Discord.RichEmbed()
                    .setAuthor('코로나', helpImg)
                    .setColor('#ff00df')
                    .setFooter(`BOT MADE BY RABBIT`)
                    commandList.forEach(x => {
                      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
                    });
            
                embed.addField('명령어: ', commandStr);
               
                message.channel.send(embed)

     } else if(message.content == '!코로나 순위') {
      let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
      let embed = new Discord.RichEmbed()
        .setTitle('코로나-19 한국 순위')
        .addField('**데이터 출처 : Ministry of Health and Welfare of Korea**', 'http://ncov.mohw.go.kr/index.jsp', true)
        .setColor('#6799FF')
        .addField('**대구 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■ (6929)**', '**서울 ■■■■■■■■■■■■■■■■■■■■■■ (1458)**', '**경기 ■■■■■■■■■■■■■■■■■■■■■ (1419)**')
        .addField('**경기 ■■■■■■■■■■■■■■■■■■■■■ (1419)**', '**경북 ■■■■■■■■■■■■■■■■■■■■ (1393)**')
        .addField('**검역 ■■■■■■■■■■■■■■■■■ (931)**', '**인천 ■■■■■■■■■■■■■ (367)**')
        .addField('**충남 ■■■■■■■■■■■■ (185)**', '**광주 ■■■■■■■■■■■ (176)**')
        .addField('**대전 ■■■■■■■■■■ (165)**', '**부산 ■■■■■■■■■ (156)**')
        .addField('**경남 ■■■■■■■■■ (151)**', '**강원 ■■■■■■■■ (72)**')
        .addField('**충북 ■■■■■■■■ (71)**', '**울산 ■■■■■■ (56)**')
        .addField('**세종 ■■■■■ (50)**', '**전북 ■■■ (38)**')
        .addField('**전남 ■■ (32)**', '**제주 ■ (23)**')
        .setFooter('BOT MADE BY RABBIT', img)
    message.channel.send(embed)
                
    } else if(message.content == '!코로나 전국') {
      let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
      let embed = new Discord.RichEmbed()
        .setTitle('코로나-19 한국 현황')
        .addField('**데이터 출처 : Ministry of Health and Welfare of Korea**', 'http://ncov.mohw.go.kr/index.jsp', true)
        .addField('**최신 데이터**', '해당 자료는 2020년 7월 17일 00시 기준 자료입니다.')
        .addField('**확진환자(누적)**', '13,672(+ 60)', true)
        .addField('**완치환자(격리해제)**', '12,460(+ 64)', true)
        .addField('**치료중(격리 중)**', '919(- 6)', true)
        .addField('**사망**', '293(+ 2)', true)
        .addField('**누적확진률**', '1.0 %', true)
        .addField('**치사율**', '2.14 %', true)
        .addField('**- 최신 브리핑 1 : 코로나바이러스감염증-19 중앙재난안전대책본부 정례브리핑 (7월 17일)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355454')
        .addField('**- 최신 브리핑 2 : 코로나바이러스감염증-19 국내 발생 현황 (7월 17일 0시)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355453')
        .setColor('#6799FF')
        .setFooter('BOT MADE BY RABBIT', img)
    message.channel.send(embed)

  } else if(message.content == '!코로나 인천') {
    let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
    let embed = new Discord.RichEmbed()
      .setTitle('코로나-19 인천 현황')
      .addField('**데이터 출처 : Ministry of Health and Welfare of Korea**', 'http://ncov.mohw.go.kr/index.jsp', true)
      .addField('**최신 데이터**', '해당 자료는 2020년 7월 16일 00시 기준 자료입니다.')
      .addField('**확진환자(누적)**', '367(+ 0)', true)
      .addField('**완치환자(격리해제)**', '341(+ 5)', true)
      .addField('**치료중(격리 중)**', '24(- 5)', true)
      .addField('**사망**', '2(+ 0)', true)
      .addField('**10만명당 발생률**', '12.41명', true)
      .addField('**전국대비 확진자 비율**', '2.68 %', true)
      .addField('**- 최신 브리핑 1 : 코로나바이러스감염증-19 국내 발생 현황 (7월 16일 0시)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355439')
      .addField('**- 최신 브리핑 2 : 코로나바이러스감염증-19 국내 발생 현황 (7월 15일 정례브리핑)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355430')
      .setColor('#6799FF')
      .setFooter('BOT MADE BY RABBIT', img)
      
      
  message.channel.send(embed)

} else if(message.content == '!코로나 서울') {
  let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
  let embed = new Discord.RichEmbed()
    .setTitle('코로나-19 서울 현황')
    .addField('**데이터 출처 : Ministry of Health and Welfare of Korea**', 'http://ncov.mohw.go.kr/index.jsp', true)
    .addField('**최신 데이터**', '해당 자료는 2020년 7월 16일 00시 기준 자료입니다.')
    .addField('**확진환자(누적)**', '1,458(+ 9)', true)
    .addField('**완치환자(격리해제)**', '1,300(+ 14)', true)
    .addField('**치료중(격리 중)**', '149(- 5)', true)
    .addField('**사망**', '9(+ 0)', true)
    .addField('**10만명당 발생률**', '14.89명', true)
    .addField('**전국대비 확진자 비율**', '10.66 %', true)
    .addField('**- 최신 브리핑 1 : 코로나바이러스감염증-19 국내 발생 현황 (7월 16일 0시)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355439')
    .addField('**- 최신 브리핑 2 : 코로나바이러스감염증-19 국내 발생 현황 (7월 15일 정례브리핑)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355430')
    .setColor('#6799FF')
    .setFooter('BOT MADE BY RABBIT', img)
    
    
message.channel.send(embed)

} else if(message.content == '!코로나 경기') {
  let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
  let embed = new Discord.RichEmbed()
    .setTitle('코로나-19 경기 현황')
    .addField('**데이터 출처 : Ministry of Health and Welfare of Korea**', 'http://ncov.mohw.go.kr/index.jsp', true)
    .addField('**최신 데이터**', '해당 자료는 2020년 7월 16일 00시 기준 자료입니다.')
    .addField('**확진환자(누적)**', '1,419(+15)', true)
    .addField('**완치환자(격리해제)**', '1,185(+ 20)', true)
    .addField('**치료중(격리 중)**', '205(- 6)', true)
    .addField('**사망**', '28(+ 1)', true)
    .addField('**10만명당 발생률**', '10.71명', true)
    .addField('**전국대비 확진자 비율**', '10.38 %', true)
    .addField('**- 최신 브리핑 1 : 코로나바이러스감염증-19 국내 발생 현황 (7월 16일 0시)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355439')
    .addField('**- 최신 브리핑 2 : 코로나바이러스감염증-19 국내 발생 현황 (7월 15일 정례브리핑)**', '링크 : http://ncov.mohw.go.kr/tcmBoardView.do?contSeq=355430')
    .setColor('#6799FF')
    .setFooter('BOT MADE BY RABBIT', img)
    
    
message.channel.send(embed)

    } else if(message.content == '!재난문자') {
        let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
        let embed = new Discord.RichEmbed()
          .setTitle(':loudspeaker: 재난문자')
          .addField('**데이터 출처 : 대한민국 재난안전포털**', 'https://www.safekorea.go.kr/idsiSFK/neo/main_m/dis/disasterDataList.html')
          .addField('**2020/07/17 10:20:48 재난문자[보성군]**', '[보성군] 코로나19 전파위험이 높은 3밀(밀폐·밀집·밀접)시설 방문 자제, 환기 및 소독 실시, 2m 거리두기, 마스크 착용 등 방역수칙을 준수하시기 바랍니다.')
          .addField('**2020/07/17 10:15:55 재난문자[고양시청]**', '[고양시청]코로나19확진자3명 발생(화전동,주교동 거주)방역소독완료,격리병상 입원 [홈페이지][카카오톡 고양시 채널]참조 https://bit.ly/2JnGBpY')
          .addField('**2020/07/17 10:14:51 재난문자[서천군청]**', '[서천군청]7.13(월) 발생한 군산시 확진자(1명) 이동경로는 방역이 완료되었으니 안심하시고 이용하시기 바라며, 금일 현재 추가 확진자는 없음을 알려드립니다.')
          .setColor('#FF0000#FF0000')
          .setFooter('최근 발송된 3개의 재난문자를 보여줍니다', img)

    message.channel.send(embed)
  } else if(message.content == '!오늘의 운세') {
      const Random = ["오늘은 몸조심 하세요.","오늘은 입조심 하세요.","오늘은 사기당하지않게 조심하세요.","오늘은 실망스러운 일이 일어날 수 있습니다.","오늘은 순조로운 날이 될거에요.","오늘은 기쁨이 가득할거에요.","오늘은 겸손하게 행동하세요.","오늘은 다른 이성에게 고백해보세요.","오늘은 돈이 생길수도 있습니다.","오늘은 일이 잘 풀리지 않을수있습니다.","오늘은 밖에 되도록 나가지 마세요.","오늘은 소원이 이루어질수 있습니다.","오늘은 연상의 연인을 만나게 되는날입니다.","오늘은 연하의 연인을 만나게 되는날입니다.","오늘은 일이 잘 풀리는 날입니다.","오늘은 힘을 사용하는 일을 하지마세요.","오늘은 까실이가 밥을 사줄수도 있어요.","채팅치시다가 점멸 누르지 마세요!","오늘은 왠지 채팅치다가 궁쓸거 같아요ㅠㅠ","노빠꾸로 가시죠!","사릴줄도 알아야 해요!","오늘은 정치질 조심하세요!","오늘 의상은 길거리에서 커플들이 싸울때 구경하면서 지나가는 사람을 구경할것 같은 의상이군요!","밤 길 조심하세요!","미안하다 이거 보여주려고 어그로끌었다.. 나루토 사스케 싸움수준 ㄹㅇ실화냐? 진짜 세계관최강자들의 싸움이다.. 그찐따같던 나루토가 맞나? 진짜 나루토는 전설이다..진짜옛날에 맨날나루토봘는데 왕같은존재인 호카게 되서 세계최강 전설적인 영웅이된나루토보면 진짜내가다 감격스럽고 나루토 노래부터 명장면까지 가슴울리는장면들이 뇌리에 스치면서 가슴이 웅장해진다.. 합체한거봐라 진짜 ㅆㅂ 이거보고 개충격먹어가지고 와 소리 저절로 나오더라? 하.. ㅆㅂ 사스케 보고싶다..  진짜언제 이렇게 신급 최강들이 되었을까 옛날생각나고 나 중딩때생각나고 뭔가 슬프기도하고 좋기도하고 감격도하고 여러가지감정이 복잡하네.. 아무튼 나루토는 진짜 애니중최거명작임..","당신은 이 문자를 발견하셨어요 1/69 의 확률로 나오는 이 문자는 발견시 박준서 키스권을 드립니다!","오늘 의상은 길가는 찐다를 보고 혐오하는 사람을 짝사랑 하던 사람을 구경하던 사람의 친구같은 의상이에요! 아주 완벽하지만 완벽하지 않아요!","오늘은 따뜻하지만 차갑고 뜨거운 아이스 라떼를 먹는건 어떨까요?","내 눈을 바라봐","오늘은 운동을 해봐요!","피하지 말고 즐기세요","오늘은 취킨을 먹을거 같군요!","오늘은 길 가다가 물웅덩이에 빠질것 같군요! 라는 애니 추천좀","오늘은 시간이 빨리갈거에요!","팔굽혀 펴기 쉬지않고 20개 하면 좋은일이 생길거에요!","새로운걸 시도해보세요!","책을 읽어보세요! (야설말고)","등장밑이 어두워요!","당당하게 행동하세요!","겸손하게 행동하세요!","오늘은 입닥치고 사세요!","팔굽혀 펴기 40개를하면 이쁜이성에게 고백받을거에요!","닥치고 버피테스트 10회 하세요","오늘은 시간이 존1나 느리게 갈거에요!","오늘 말하면 거절당합니다!","틱톡광고 면제권 1매","불을끄세요! 당신 램좀보게","알려줘 너의 RGB값","오늘은 흥겨울겁니다!","팔굽혀 펴기 30회를 한다면 존나 행복한 하루가 될수있어요!","오늘니기분 컬러로 말할게 ","공부보다 연습해야할건 현피워","현피보다 연습해야할건 공부워","오늘 고백하면 까입니다!","오늘 고백하면 성공합니다 ","오늘 고백하면 집으로 be back 합니다!(라임 미쳤고","이편지는 영국에서 최초로 시작되어 미안하다 이거보여주려고 어그로 끌었다 봇개발자 관리자 싸움수준 ㄹㅇ 실화냐? 진짜 세계관 최강자들의 싸움이다 관리자가 사회주의의 낙원으로 오세요! 할때 가슴이 웅장해진다 진짜 봇개발자는 전설이다....","안녕하세요 박준서입니다 이 메세지는 10000분의 1확률로 나오는 메세지입니다 까실서버 이용해주셔서 감사하고요 봇도 잘 이용해 주셔서 감사합니다 처음시작할땐 반응이 좋은거 같다가 반응이 다시 사그라 들었는데요 다시이렇게 많지는 않지만 제게는 많게느껴지는 사람들이 와서 놀고있으니까 정말 기쁩니다 정말 감사하고요 잘 이용해 주세요!","밖에한번 나가봐요!","집에있기보다 날씨가 좋다면 나가서 미세먼지좀 마시고 오세요","집에있기보다 날씨가 좋다면 나가서 미세먼지좀 마시고 오세요","선풍기 바람보다 밖에나가서 미세먼지 섞인 바람을 느끼세요!","운동을 하는건 어떨까요?"]
      const Real = Random[Math.floor(Math.random()*Random.length) + 1]
     let img = 'https://media.discordapp.net/attachments/699520044811550773/721287727659745360/1.png';
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
