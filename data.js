/* =========================================================================
   Serial Experiments Lain 兔子洞冰山图 —— 数据（第 1 部：第 1–7 层）
   词条字段：
     t   标题
     c   分类（见 CATEGORIES）
     s   来源性质：官方 / 半官方 / 社区 / 无来源
     d   解释（中文）
     e   证据链接 [[显示文字, URL], ...]
   ========================================================================= */

window.LAIN_DATA = {
  meta: {
    title: "Serial Experiments Lain 兔子洞冰山图",
    subtitle: "close the world, open the nExt",
    edition: "实验·第一版",
    note:
      "这是一个同人整理项目，模仿中文兔子洞冰山图的形态：词条按「越深越冷门、越诡异」排序，" +
      "顺序不代表任何属性的高低。每条词条都附有解释与证据链接；来源性质分为 官方 / 半官方 / 社区 / 无来源，" +
      "无来源与可疑档案会在词条内单独标注，请把它们当作「都市传说」而不是「设定」。" +
      "本站不收录任何侵害个人隐私、现实伤害或违法内容。"
  },

  categories: [
    { id: "canon",  name: "作品与设定", glyph: "◍", color: "#8fd6ff" },
    { id: "meta",   name: "幕后与制作", glyph: "✎", color: "#c9a7ff" },
    { id: "goods",  name: "周边与商品", glyph: "▣", color: "#ffd479" },
    { id: "comm",   name: "同人与社区", glyph: "⌗", color: "#7ff0c4" },
    { id: "glitch", name: "实验与错误", glyph: "⌁", color: "#ff8fb1" },
    { id: "doubt",  name: "可疑档案", glyph: "?", color: "#ff9d5c" },
    { id: "world",  name: "外部共振", glyph: "◎", color: "#9fb8ff" },
    { id: "media",  name: "媒介考古", glyph: "▤", color: "#a8ff8f" },
    { id: "theory", name: "理论读解", glyph: "∴", color: "#d7d7e8" }
  ],

  tiers: [
    { n: 1,  name: "海面",     sub: "PRESENT DAY, PRESENT TIME", color: "#dff2ff", tx: "#e8f8ff", depth: "0 m" },
    { n: 2,  name: "浅层",     sub: "WEIRD",                      color: "#b8e2ff", tx: "#d6f0ff", depth: "80 m" },
    { n: 3,  name: "弱光层",   sub: "GIRLS",                      color: "#93cdfb", tx: "#c4e7ff", depth: "260 m" },
    { n: 4,  name: "冷却层",   sub: "PSYCHE",                     color: "#72b2ef", tx: "#b2dcff", depth: "600 m" },
    { n: 5,  name: "静电层",   sub: "RELIGION",                   color: "#5b95dc", tx: "#a6d2f5", depth: "1 100 m" },
    { n: 6,  name: "失真层",   sub: "DISTORTION",                 color: "#4a78c4", tx: "#9dc7ec", depth: "1 800 m" },
    { n: 7,  name: "无光层",   sub: "KIDS",                       color: "#3a5da8", tx: "#96bcdf", depth: "2 700 m" },
    { n: 8,  name: "压力层",   sub: "SOCIETY",                    color: "#2e4787", tx: "#91b1d2", depth: "3 900 m" },
    { n: 9,  name: "幻觉层",   sub: "RUMORS",                     color: "#25366a", tx: "#8da7c4", depth: "5 400 m" },
    { n: 10, name: "协议层",   sub: "PROTOCOL",                   color: "#1f2b55", tx: "#8a9db6", depth: "7 200 m" },
    { n: 11, name: "遗忘层",   sub: "LOVE",                       color: "#1a2244", tx: "#8894a9", depth: "9 400 m" },
    { n: 12, name: "无肉层",   sub: "INFORNOGRAPHY",              color: "#151a35", tx: "#878ea1", depth: "12 000 m" },
    { n: 13, name: "重置层",   sub: "LANDSCAPE",                  color: "#101427", tx: "#868a99", depth: "—" },
    { n: 14, name: "自我层",   sub: "EGO",                        color: "#0a0c18", tx: "#9590b4", depth: "∞" }
  ],

  entries: [

  /* ===================== TIER 1 ===================== */
  {
    t: "岩仓玲音（Lain Iwakura）", c: "canon", s: "官方", tier: 1,
    d: "14 岁，短发、不对称的刘海、一枚十字形发夹。内向、话少、怕生，却在网络里异常自如。几乎所有观众都是从她开始掉进这个洞的——但她也可能是整个故事里最不可靠的叙述者。",
    e: [["lain.wiki · Lain Iwakura", "https://lain.wiki/wiki/Lain_Iwakura"]]
  },
  {
    t: "Wired（连线网络）", c: "canon", s: "官方", tier: 1,
    d: "剧中的全球通信网络。它从电报、电话一路长成互联网，最后变成「人类一切通信的总和」。剧中反复暗示：Wired 不是工具，而是正在变成现实本身。",
    e: [["lain.wiki · The Wired", "https://lain.wiki/wiki/The_Wired"]]
  },
  {
    t: "NAVI（个人机）", c: "canon", s: "官方", tier: 1,
    d: "Lain 世界里的个人电脑，形态从台式到掌机都有。玲音的父亲替她升级 NAVI 的那几场戏，是整部作品从日常滑向异常的第一道坡。",
    e: [["lain.wiki · NAVI", "https://lain.wiki/wiki/NAVI"], ["lain.wiki · Devices", "https://lain.wiki/wiki/Devices"]]
  },
  {
    t: "Duvet（Bôa）", c: "meta", s: "官方", tier: 1,
    d: "片头曲。英国乐队 Bôa 的旧作，被导演中村隆太郎从专辑里挑出来当 OP——「I am falling, I am fading」的歌词与画面一起，成了 90 年代末动画最著名的开场之一。",
    e: [["lain.wiki · Duvet", "https://lain.wiki/wiki/Duvet"], ["lain.wiki · Twilight (Bôa)", "https://lain.wiki/wiki/Twilight_(B%C3%B4a_album)"]]
  },
  {
    t: "Cyberia（涩谷的地下俱乐部）", c: "canon", s: "官方", tier: 1,
    d: "没有年龄限制的夜店，全剧最重要的现实地点。名字借自 Douglas Rushkoff 1994 年的同名著作《Cyberia》——一本讲技术、药物与亚文化的书。",
    e: [["lain.wiki · Cyberia", "https://lain.wiki/wiki/Cyberia"]]
  },
  {
    t: "十字发夹", c: "canon", s: "半官方", tier: 1,
    d: "很多人以为是发圈。设定集《Visual Experiments Lain》的封面与设定稿证明它是可以展开成十字形的发夹；而在动画里它从未展开过，也从未参与任何剧情。",
    e: [["lain.wiki · Lain's Hairclip", "https://lain.wiki/wiki/Lain%27s_Hairclip"]]
  },
  {
    t: "爱丽丝（瑞城ありす）", c: "canon", s: "官方", tier: 1,
    d: "玲音唯一的朋友。全剧的情感重心：玲音为了保护她，最后选择抹掉自己在世界上的存在。名字显然来自《爱丽丝梦游仙境》——「掉进兔子洞」的那位。",
    e: [["lain.wiki · Alice Mizuki", "https://lain.wiki/wiki/Alice_Mizuki"]]
  },
  {
    t: "「不论你在哪里，大家都连在一起」", c: "canon", s: "官方", tier: 1,
    d: "第 2 集里玲音在 Cyberia 说出的名台词。它既像安慰，也像判决：这句话说完，身边的人随即开枪自杀。",
    e: [["lain.wiki · Layer 02", "https://lain.wiki/wiki/Layer_02"]]
  },
  {
    t: "熊睡衣", c: "canon", s: "半官方", tier: 1,
    d: "玲音缩进熊玩偶睡衣里，是为了抵御外部世界。她每次想和「家人」说话时都会穿上它。这个道具在粉丝创作里的存在感远超正片。",
    e: [["lain.wiki · Bear suit", "https://lain.wiki/wiki/Bear_suit"]]
  },
  {
    t: "两张原声带：Cyberia Mix 与 BOOTLEG", c: "meta", s: "官方", tier: 1,
    d: "竹本晃（Akira Takemoto）的环境音配乐与 Wasei「JJ」Chikada 的俱乐部混音，是这部作品「听起来像什么」的一半。BOOTLEG 的 CD-ROM 里还塞了换装小游戏和 128kbps 的 MP3 长版。",
    e: [["lain.wiki · Cyberia Mix", "https://lain.wiki/wiki/Serial_Experiments_Lain:_Cyberia_Mix"], ["lain.wiki · BOOTLEG", "https://lain.wiki/wiki/Serial_experiments_lain_BOOTLEG"]]
  },
  {
    t: "制作班底：上田耕行／中村隆太郎／安倍吉俊／小中千昭", c: "meta", s: "官方", tier: 1,
    d: "企划上田耕行、导演中村隆太郎、角色原案安倍吉俊、脚本小中千昭。上田说这是「一场巨大的冒险」，并期待日美观众产生完全相反的理解——结果两边看法几乎一致，他为此感到失望。",
    e: [["lain.wiki · Ueda Yasuyuki", "https://lain.wiki/wiki/Ueda_Yasuyuki"], ["lain.wiki · 主条目", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },
  {
    t: "「层」（Layer）——13 集与第 14 层", c: "glitch", s: "半官方", tier: 1,
    d: "剧集不叫「话」，叫「层」（Layer 01–13）。而在各种设定讨论里，「第 14 层」被当作一个不存在却又必须存在的层级——它正好对应冰山图最底下的那一格。",
    e: [["lain.wiki · 各层条目", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },

  /* ===================== TIER 2 ===================== */
  {
    t: "四方田千砂的邮件", c: "canon", s: "官方", tier: 2,
    d: "第 1 集，跳楼自杀的女同学给全班发了邮件：「我没有死，只是舍弃了肉体。我在 Wired 里见到了神。」整部作品从这里开始漏水。",
    e: [["lain.wiki · Chisa Yomoda", "https://lain.wiki/wiki/Chisa_Yomoda"]]
  },
  {
    t: "PS1 游戏（1998.11.26）", c: "canon", s: "官方", tier: 2,
    d: "和动画同期开发、剧本先写的 PlayStation 游戏。玩家在随机顺序的档案碎片里拼出玲音的故事，主角还有一位 27 岁的心理医生米良柊子。它比动画更黑。",
    e: [["lain.wiki · 游戏条目", "https://lain.wiki/wiki/Serial_Experiments_Lain_(game)"]]
  },
  {
    t: "Copland OS", c: "canon", s: "官方", tier: 2,
    d: "Tachibana 研究所开发、NAVI 上最普及的操作系统。名字来自苹果未完成的下一代 Mac OS「Copland」——后来苹果把 NeXT 买了下来。",
    e: [["lain.wiki · Copland OS", "https://lain.wiki/wiki/Copland_OS"]]
  },
  {
    t: "HandiNAVI", c: "canon", s: "官方", tier: 2,
    d: "掌上终端，外形明显照着 Apple Newton 设计。剧中人捧着它走在街上，像 1998 年的人提前拿起了智能手机。",
    e: [["lain.wiki · HandiNAVI", "https://lain.wiki/wiki/HandiNAVI"]]
  },
  {
    t: "苹果引用链", c: "media", s: "半官方", tier: 2,
    d: "玲音的旧电脑对应 20th Anniversary Mac，爱丽丝的对应 iMac G3，HandiNAVI 对应 Newton。小中千昭在访谈里承认staff 是苹果粉丝。",
    e: [["lain.wiki · Apple 引用", "https://lain.wiki/wiki/Apple_Inc._References"]]
  },
  {
    t: "玲音的房间与不断增生的 NAVI", c: "canon", s: "官方", tier: 2,
    d: "从一张书桌开始，一路膨胀成占满整个房间、风扇轰鸣、线缆像内脏一样盘绕的机器堆。房间的「生长」是全剧最诚实的进度条。",
    e: [["lain.wiki · Lain's NAVI", "https://lain.wiki/wiki/Lain%27s_NAVI"]]
  },
  {
    t: "Tachibana 综合研究所", c: "canon", s: "官方", tier: 2,
    d: "开发 Protocol 7 与 Copland OS 的大公司，也是英利政美生前任职的地方。Tachibana 是一种柑橘——和「Apple」正好凑成一对水果。",
    e: [["lain.wiki · Tachibana", "https://lain.wiki/wiki/Tachibana_General_Laboratories"]]
  },
  {
    t: "JJ 与 Cyberia 的 DJ 台", c: "canon", s: "官方", tier: 2,
    d: "Cyberia 的 DJ JJ，也是现实中 Wasei「JJ」Chikada 的分身。他从 2018 年起持续发行《Cyberia Layer》系列专辑，把虚构的俱乐部一直开到今天。",
    e: [["lain.wiki · JJ", "https://lain.wiki/wiki/JJ"], ["lain.wiki · Cyberia Layers", "https://lain.wiki/wiki/Cyberia_Layers"]]
  },
  {
    t: "太郎、Myu-Myu、Masayuki", c: "canon", s: "官方", tier: 2,
    d: "Cyberia 的常客三人组。太郎后来成了「东方算法骑士团」接近玲音的通道；他们也是全剧少数「始终没有真正理解发生了什么」的人。",
    e: [["lain.wiki · Taro", "https://lain.wiki/wiki/Taro"], ["lain.wiki · Layer 03", "https://lain.wiki/wiki/Layer_03"]]
  },
  {
    t: "第 2 集的枪击", c: "canon", s: "官方", tier: 2,
    d: "服下 Accela 的少年在俱乐部里拔枪扫射，最后把枪口对准自己。这是全剧第一次把「Wired 的幻觉」变成现实里的血。",
    e: [["lain.wiki · Layer 02", "https://lain.wiki/wiki/Layer_02"]]
  },
  {
    t: "配送员（Delivery Man）", c: "canon", s: "官方", tier: 2,
    d: "总是戴着护目镜、骑着机车送货的男人。他把装着电路板的包裹送到骑士团成员手上——在玲音的世界里，物流就是阴谋的血管。",
    e: [["lain.wiki · Delivery Man", "https://lain.wiki/wiki/Delivery_Man"]]
  },
  {
    t: "无脸的都市群像（stock footage）", c: "media", s: "官方", tier: 2,
    d: "每一集开头都重复同一批涩谷街景镜头：看不清脸的人群、红绿灯、车流。它们不是省钱，而是一种陈述——城市里的人彼此连接，却谁也不认识谁。",
    e: [["lain.wiki · 主条目", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },
  {
    t: "电线的嗡鸣（hum）", c: "media", s: "半官方", tier: 2,
    d: "全剧几乎不间断的低频电流声。它既是配乐也是叙事：Wired 从来没有安静过，你只是没在听。",
    e: [["lain.wiki · OST", "https://lain.wiki/wiki/Serial_Experiments_Lain_OST"]]
  },
  {
    t: "岩仓家的晚饭", c: "canon", s: "官方", tier: 2,
    d: "面无表情的母亲、冷淡的姐姐、埋头电脑的父亲。第 10 集房子空了、植物枯了，父亲留下一句告别——这一家人从头到尾都像在扮演一家人。",
    e: [["lain.wiki · Family", "https://lain.wiki/wiki/Family"]]
  },

  /* ===================== TIER 3 ===================== */
  {
    t: "三种玲音（Second / Third / Wired Lain）", c: "canon", s: "官方", tier: 3,
    d: "现实里的玲音、被骑士团造出来的「恶玲音」、以及只存在于 Wired 里的玲音。玲音自己说过：恶玲音是「我讨厌的自己的全部」。",
    e: [["lain.wiki · Third Lain", "https://lain.wiki/wiki/Third_Lain"], ["lain.wiki · The Wired", "https://lain.wiki/wiki/The_Wired"]]
  },
  {
    t: "Accela", c: "canon", s: "官方", tier: 3,
    d: "吞下去就能让大脑以 12 倍速运转的小机器，装在充满液体的有机胶囊里，像毒品一样交易（约 4000–10000 日元）。剧中插入的「说明文字」其实抄自 1999 年 Genentech 官网关于抗癌抗体的介绍。",
    e: [["lain.wiki · Accela", "https://lain.wiki/wiki/Accela"]]
  },
  {
    t: "Psyche 芯片", c: "canon", s: "官方", tier: 3,
    d: "来路不明（据说来自台湾）的加速芯片，能让 NAVI 不用键盘鼠标、直接以「全动作全范围」接入 Wired。它其实是 Protocol 7 的后门载体。",
    e: [["lain.wiki · Psyche", "https://lain.wiki/wiki/Psyche"]]
  },
  {
    t: "「多媒介的总和」企划论", c: "meta", s: "半官方", tier: 3,
    d: "上田耕行说，他要靠动画、游戏、漫画这些媒介加起来传达作品的核心。于是「玲音」从一开始就不是一部动画，而是一个分布在多种媒介里的存在。",
    e: [["lain.wiki · 主条目 · 制作", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },
  {
    t: "Weather Break（片尾插画）", c: "meta", s: "官方", tier: 3,
    d: "安倍吉俊为每集画的 15 秒片尾插画，因为紧接其后的就是东京电视台的天气预报而做成「天气」主题。第 5 集那张写着「天气坏掉了吗？」。",
    e: [["lain.wiki · Weather Break", "https://lain.wiki/wiki/Weather_Break"]]
  },
  {
    t: "玲音的日记（游戏内文件）", c: "canon", s: "官方", tier: 3,
    d: "PS 游戏里的一份日记文件，玩家可以把它完整读出来。动画里玲音几乎不说话，日记是她唯一一次长时间的自我陈述。",
    e: [["lain.wiki · Lain's Diary", "https://lain.wiki/wiki/Lain%27s_Diary"]]
  },
  {
    t: "Bike-chan（玩具狗）", c: "canon", s: "官方", tier: 3,
    d: "玲音从小抱到大的玩偶狗，她反复尝试把它改成会动的机器。在《The Nightmare of Fabrication》里，她剪开它的肚子装进电路——为了不让自己彻底孤独。",
    e: [["lain.wiki · Bike-chan", "https://lain.wiki/wiki/Bike-chan"]]
  },
  {
    t: "爱丽丝以外的朋友：Juri 与 Reika", c: "canon", s: "官方", tier: 3,
    d: "两个普通的、会在意流行与八卦的同学。她们的作用是提供「正常世界」的参照物：当她们开始忘记玲音，世界就已经开始重置了。",
    e: [["lain.wiki · Juri Katou", "https://lain.wiki/wiki/Juri_Katou"]]
  },
  {
    t: "「家人是假的」", c: "canon", s: "官方", tier: 3,
    d: "MIB 对玲音说：你的家人不是你的家人；父亲也承认自己只是被安排来「扮演父亲」的。那她是谁被谁生出来的？剧集没有回答。",
    e: [["lain.wiki · Family", "https://lain.wiki/wiki/Family"], ["lain.wiki · Layer 10", "https://lain.wiki/wiki/Layer_10"]]
  },
  {
    t: "「PRESENT DAY, PRESENT TIME」", c: "glitch", s: "官方", tier: 3,
    d: "每集标题前后那行 CG 字。2009 年的 Blu-ray 修复版把许多 CG 段落（包括这一行）重新渲染过——于是「同一部作品」出现了画质不同的两个版本。",
    e: [["lain.wiki · 主条目", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },
  {
    t: "「远い叫び」（Tooi Sakebi）", c: "meta", s: "官方", tier: 3,
    d: "片尾曲，中井戸玲一作。和 OP 的英文摇滚完全相反，它是一首日语叙事曲，唱的是「远处的呼喊」——正好是 Wired 里那些听不见的声音。",
    e: [["lain.wiki · Tooi Sakebi", "https://lain.wiki/wiki/Tooi_Sakebi"]]
  },
  {
    t: "1998 年 7 月 6 日凌晨 1:15", c: "media", s: "官方", tier: 3,
    d: "东京电视台的深夜档。这个时段决定了它的观众：睡不着的人、刚接触互联网的人、以及后来在论坛上把它供起来的人。",
    e: [["lain.wiki · 主条目", "https://lain.wiki/wiki/Serial_Experiments_Lain"], ["MAL 条目", "https://myanimelist.net/anime/339"]]
  },
  {
    t: "lain.wiki（社区百科）", c: "comm", s: "社区", tier: 3,
    d: "粉丝维护的 Lain 维基，205 篇条目，从逐集脚本、分镜到周边清单。本站大量证据链接指向它——它自己也是这部作品「在 Wired 里继续存在」的证据。",
    e: [["lain.wiki", "https://lain.wiki/wiki/Main_Page"]]
  },
  {
    t: "「你是被需要的吗？」", c: "canon", s: "官方", tier: 3,
    d: "第 10 集，爱丽丝对玲音说：现实世界里不需要你。这句台词之后，玲音开始真正地消失——不是被杀死，而是被世界取消。",
    e: [["lain.wiki · Layer 10", "https://lain.wiki/wiki/Layer_10"]]
  },

  /* ===================== TIER 4 ===================== */
  {
    t: "东方算法骑士团（Knights of the Eastern Calculus）", c: "canon", s: "官方", tier: 4,
    d: "一群匿名的高超黑客，自称英利政美的信徒。名字戏仿 MIT 的「Knights of the Lambda Calculus」（λ 演算骑士团）——一个把计算本身神圣化的玩笑。",
    e: [["lain.wiki · Knights", "https://lain.wiki/wiki/Knights_of_the_Eastern_Calculus"]]
  },
  {
    t: "Nezumi（老鼠）", c: "canon", s: "官方", tier: 4,
    d: "戴着自制头盔显示器、把浏览器穿在身上的男人，拼命想加入骑士团。第 7 集结尾，他死在路边的水沟里。名字来自《爱丽丝》里的睡鼠（Dormouse）。",
    e: [["lain.wiki · Nezumi", "https://lain.wiki/wiki/Nezumi"]]
  },
  {
    t: "黑衣人：卡尔与林遂熙", c: "canon", s: "官方", tier: 4,
    d: "受「老板」指使、清剿骑士团的两名特工。他们会说「你从没见过我们，我们也没来过这里」。第 10 集，卡尔对玲音说「我爱你」。",
    e: [["lain.wiki · Men in Black", "https://lain.wiki/wiki/Men_in_Black"]]
  },
  {
    t: "老板（Boss）与 Tachibana 的内斗", c: "canon", s: "官方", tier: 4,
    d: "MIB 的雇主，把玲音请去修 NAVI，然后问她：你知道自己是谁吗？他知道英利政美介入了 Protocol 7，但不知道全部计划——「我们不需要 Wired 的神」。",
    e: [["lain.wiki · Layer 07", "https://lain.wiki/wiki/Layer_07"]]
  },
  {
    t: "KIDS 系统与肯辛顿实验", c: "canon", s: "官方", tier: 4,
    d: "霍奇森教授为「肯辛顿实验」造出的精神电子装置，用来收集、放大儿童潜在的超能力。实验失败后他销毁了机器、删掉了图纸，骑士团却把数据捞了回来。",
    e: [["lain.wiki · KIDS", "https://lain.wiki/wiki/KIDS"]]
  },
  {
    t: "PHANTOMa", c: "canon", s: "官方", tier: 4,
    d: "孩子们都在玩的 MMORPG，实际是 KIDS 计划的前台。第 4 集里，一个男人在游戏与现实的界线崩塌时，用游戏里的武器射杀了现实中的小女孩。",
    e: [["lain.wiki · PHANTOMa", "https://lain.wiki/wiki/PHANTOMa"]]
  },
  {
    t: "霍奇森教授", c: "canon", s: "半官方", tier: 4,
    d: "KIDS 的发明者，在 Wired 里向玲音讲述实验。名字来自《爱丽丝》的作者 Charles Dodgson（Lewis Carroll），而不是恐怖小说家 William Hope Hodgson——两人还有一个共同点：都相信灵能与精神研究。",
    e: [["lain.wiki · Professor Hodgeson", "https://lain.wiki/wiki/Professor_Hodgeson"]]
  },
  {
    t: "柴郡猫（Cheshire Cat）", c: "canon", s: "官方", tier: 4,
    d: "第 6 集里只剩一张嘴的网虫，因为「隐喻化」不完整只能显形到嘴。他酸溜溜地称赞玲音能完整地在 Wired 里显形。设定稿里他叫「口」。",
    e: [["lain.wiki · Cheshire Cat", "https://lain.wiki/wiki/Cheshire_Cat"]]
  },
  {
    t: "Metaphorize（メタファライズ）", c: "glitch", s: "半官方", tier: 4,
    d: "剧中的自造词：把自己的数字分身投射进 Wired。第 7 集它曾在画面上闪现，还拼错成「metaphorlize」；英文字幕常把它误译成 metamorphosis。",
    e: [["lain.wiki · Metaphorize", "https://lain.wiki/wiki/Metaphorize"]]
  },
  {
    t: "Protocol 7 与舒曼共振", c: "canon", s: "官方", tier: 4,
    d: "英利政美在下一代网络协议里塞进了自己的代码，让人可以不靠任何设备、仅通过地球的舒曼共振接入 Wired。他因此被解雇，随后「自杀」。",
    e: [["lain.wiki · Protocol 7", "https://lain.wiki/wiki/Protocol_7"], ["lain.wiki · Schumann Resonances", "https://lain.wiki/wiki/Schumann_Resonances"]]
  },
  {
    t: "罗斯威尔与外星人层", c: "world", s: "官方", tier: 4,
    d: "第 9 集用老新闻片的方式讲 1947 年罗斯威尔事件。剧中还出现灰皮肤、大脑袋的外星人；设定稿把那个长着玲音脸的外星人叫「Glain」（Grey + Lain）。",
    e: [["lain.wiki · Paranormal Occurrences", "https://lain.wiki/wiki/Paranormal_Occurrences_in_Serial_Experiments_Lain"]]
  },
  {
    t: "「人类已经停止进化」论", c: "theory", s: "官方", tier: 4,
    d: "第 5 集开场的旁白：人类的癌症发病率远低于其他动物，有理论认为人类再也不会进化了——「如果那是真的，这是多么愚蠢的动物」。",
    e: [["lain.wiki · Layer 05", "https://lain.wiki/wiki/Layer_05"]]
  },
  {
    t: "流言即现实（Layer 08）", c: "canon", s: "官方", tier: 4,
    d: "Wired 上关于玲音的流言越滚越大，现实里同学看她的眼神就变了。玲音一度把流言「删掉」，世界随即改写——传播在这里就是创世。",
    e: [["lain.wiki · Layer 08", "https://lain.wiki/wiki/Layer_08"], ["lain.wiki · Rumours in the Wired", "https://lain.wiki/wiki/Rumours_in_the_Wired"]]
  },
  {
    t: "被公开的骑士团名单", c: "canon", s: "官方", tier: 4,
    d: "玲音把骑士团成员名单泄露到 Wired 上。随后 MIB 开始暗杀，其余成员自杀。第 10 集这段蒙太奇是全剧最冷的一场戏。",
    e: [["lain.wiki · Layer 10", "https://lain.wiki/wiki/Layer_10"]]
  },

  /* ===================== TIER 5 ===================== */
  {
    t: "Second Lain / Wired 的玲音", c: "canon", s: "官方", tier: 5,
    d: "在 Wired 里活动的那个玲音，能在任何屏幕、任何人的记忆里出现。她与肉身的玲音谁是「本尊」，剧集到最后也没有裁决。",
    e: [["lain.wiki · The Wired", "https://lain.wiki/wiki/The_Wired"], ["lain.wiki · Third Lain", "https://lain.wiki/wiki/Third_Lain"]]
  },
  {
    t: "Deus（自称神者）", c: "canon", s: "官方", tier: 5,
    d: "第 8 集以金属有机的蠕动块状物出现，宣称自己无处不在、并且「创造了玲音」。第 10 集揭晓：他就是英利政美。",
    e: [["lain.wiki · Deus", "https://lain.wiki/wiki/Deus"]]
  },
  {
    t: "「舍弃肉体」（abandon the flesh）", c: "canon", s: "官方", tier: 5,
    d: "千砂在邮件和莉音面前用的说法。它听起来像解脱，实际是全剧最恐怖的一句话：把身体当作可以卸载的外壳。",
    e: [["lain.wiki · Chisa Yomoda", "https://lain.wiki/wiki/Chisa_Yomoda"], ["lain.wiki · Layer 11", "https://lain.wiki/wiki/Layer_11"]]
  },
  {
    t: "美香变成 modem", c: "glitch", s: "官方", tier: 5,
    d: "第 9 集，姐姐美香半梦半醒地说自己被接入、身体成了通信设备。这一段没有任何解释，也没有后续。",
    e: [["lain.wiki · Layer 09", "https://lain.wiki/wiki/Layer_09"]]
  },
  {
    t: "「身体是机器，心灵是数据」", c: "theory", s: "官方", tier: 5,
    d: "英利政美的宣言。他要人类摆脱肉体的限制、作为数字实体活下去。玲音最后拒绝了他——她认为现实本身有价值。",
    e: [["lain.wiki · Masami Eiri", "https://lain.wiki/wiki/Masami_Eiri"], ["lain.wiki · Reality", "https://lain.wiki/wiki/Reality"]]
  },
  {
    t: "漂浮的英文台词", c: "glitch", s: "官方", tier: 5,
    d: "「Why do you have to do this?」「You have to think of yourself.」——画面上不断浮现没有说话人的第二人称英语短句。它们像系统提示，也像观众自己的念头。",
    e: [["lain.wiki · Layer 01", "https://lain.wiki/wiki/Layer_01"]]
  },
  {
    t: "「没有真正的我」", c: "theory", s: "官方", tier: 5,
    d: "第 13 集玲音的独白：我到底在哪里？在那边，还是在这边？我知道我连接着你，可是真正的我在哪里？——她知道没有「真正的我」。",
    e: [["lain.wiki · Layer 13", "https://lain.wiki/wiki/Layer_13"]]
  },
  {
    t: "自我复制的源代码（Source Code）", c: "canon", s: "官方", tier: 5,
    d: "剧中反复出现的「源代码」意象：能改写现实的不是魔法，是可被编辑的文本。这也是为什么本剧的恐怖感总带着程序员的冷。",
    e: [["lain.wiki · Source Code", "https://lain.wiki/wiki/Source_Code"]]
  },
  {
    t: "Spires（尖塔）", c: "glitch", s: "半官方", tier: 5,
    d: "第 11、12 集忽然从城市里升起的瓶状尖塔，顶端带着球体，没有任何解释。分镜脚本里小中千昭只写：电线上的脉冲像大脑的突触。",
    e: [["lain.wiki · Spires", "https://lain.wiki/wiki/Spires"]]
  },
  {
    t: "KIDS 生成的巨大玲音", c: "canon", s: "官方", tier: 5,
    d: "第 6 集，全城孩子玩 PHANTOMa 时产生的念力，在云层上投影出一个巨大的玲音。这是全剧最像「神迹」的一幕。",
    e: [["lain.wiki · Layer 06", "https://lain.wiki/wiki/Layer_06"]]
  },
  {
    t: "外星人 Glain", c: "glitch", s: "半官方", tier: 5,
    d: "第 9 集出现在玲音房间、第 11 集出现在爱丽丝房间的外星人，穿着绿红条纹毛衣（对《猛鬼街》的致敬）。DVD 盒设定稿里它叫 Glain。",
    e: [["lain.wiki · Paranormal Occurrences", "https://lain.wiki/wiki/Paranormal_Occurrences_in_Serial_Experiments_Lain"]]
  },
  {
    t: "第 3 集的审讯室", c: "canon", s: "官方", tier: 5,
    d: "警察问玲音：你的父母我们联系不上。红色激光、地上的血、闪回。观众第一次意识到：这个女孩的家庭可能从一开始就不存在。",
    e: [["lain.wiki · Layer 03", "https://lain.wiki/wiki/Layer_03"]]
  },
  {
    t: "「假骑士」（Wannabe Knight）之死", c: "canon", s: "官方", tier: 5,
    d: "第 7 集，恶玲音一边笑一边看着那个想加入骑士团的人死去。她笑，是因为她知道接下来会发生什么。",
    e: [["lain.wiki · Third Lain", "https://lain.wiki/wiki/Third_Lain"], ["lain.wiki · Layer 07", "https://lain.wiki/wiki/Layer_07"]]
  },
  {
    t: "「神」在 Wired 里到底是什么", c: "theory", s: "官方", tier: 5,
    d: "剧中把「神」定义为「所有人共享的意识总和」：只要所有人都相信，它就存在。英利政美要当这个神，玲音却被推上同一个位置。",
    e: [["lain.wiki · God", "https://lain.wiki/wiki/God"], ["lain.wiki · Becoming God", "https://lain.wiki/wiki/Becoming_God"]]
  },

  /* ===================== TIER 6 ===================== */
  {
    t: "英利政美之死", c: "canon", s: "官方", tier: 6,
    d: "被 Tachibana 解雇后，他死在铁道上，看上去是自杀。第 9 集让他在玲音面前现身——一个把意识上传进协议的人，尸体到底算不算他的？",
    e: [["lain.wiki · Masami_Eiri", "https://lain.wiki/wiki/Masami_Eiri"]]
  },
  {
    t: "第 12 集的肉身化英利", c: "glitch", s: "官方", tier: 6,
    d: "他试图重新获得肉体，变成一团漂浮的、长着可伸缩舌头与肉芽的畸形物，抓住玲音与爱丽丝。最后被玲音用整屋的机器砸成肉泥。",
    e: [["lain.wiki · Layer 12", "https://lain.wiki/wiki/Layer_12"]]
  },
  {
    t: "Project Xanadu 与 MEMEX", c: "world", s: "官方", tier: 6,
    d: "第 9 集用大段说明文字讲记忆与超文本：Vannevar Bush 的 MEMEX、Ted Nelson 的 Project Xanadu。这些真实的技术乌托邦，正是 Wired 的前身。",
    e: [["lain.wiki · Layer 09", "https://lain.wiki/wiki/Layer_09"]]
  },
  {
    t: "地球巧合控制办公室（ECCO）", c: "doubt", s: "官方", tier: 6,
    d: "剧中当作阴谋论提及的机构，现实中来自 John Lilly 的「Earth Coincidence Control Office」——一个用巧合解释世界的玩笑式信仰。",
    e: [["lain.wiki · Conspiracy", "https://lain.wiki/wiki/Conspiracy"]]
  },
  {
    t: "Majestic 12", c: "doubt", s: "官方", tier: 6,
    d: "与罗斯威尔绑定的「十二人委员会」传说，在剧中被列入阴谋论清单。它和 UFO 档案一起，构成了 Lain 世界的「官方谎言层」。",
    e: [["lain.wiki · Conspiracy", "https://lain.wiki/wiki/Conspiracy"]]
  },
  {
    t: "IPv6 / IPv7 与现实协议", c: "media", s: "官方", tier: 6,
    d: "剧中的 Wired 主要运行在 IPv6 上，而「IPv7」是 Tachibana 正在推的新协议。现实里 IPv7 从未被采用——动画把一个不存在的协议当成了世界末日的引信。",
    e: [["lain.wiki · The Wired", "https://lain.wiki/wiki/The_Wired"]]
  },
  {
    t: "「无设备连接」的预言", c: "media", s: "社区", tier: 6,
    d: "1998 年，剧里的人在讨论不用键盘、不用鼠标、甚至不用终端的连接方式。二十多年后这变成了常识——这也是这部作品最容易被误读成「预言」的地方。",
    e: [["lain.wiki · Psyche", "https://lain.wiki/wiki/Psyche"], ["lain.wiki · HandiNAVI", "https://lain.wiki/wiki/HandiNAVI"]]
  },
  {
    t: "Progenetis（被造出来的父亲）", c: "canon", s: "官方", tier: 6,
    d: "游戏里，父亲失踪后玲音写了一个 AI、装进机器身体里当父亲，后来又把它上传进 Wired、毁掉机器。动画里「父亲只是被雇来扮演父亲」的说法与此呼应。",
    e: [["lain.wiki · 游戏条目", "https://lain.wiki/wiki/Serial_Experiments_Lain_(game)"]]
  },
  {
    t: "米良柊子（游戏里的心理医生）", c: "canon", s: "官方", tier: 6,
    d: "27 岁，Tachibana 心理部门。她给 11 岁的玲音做咨询，最后被玲音杀死、人格被吸进 Wired。游戏线比动画线残忍得多。",
    e: [["lain.wiki · Touko Yonera", "https://lain.wiki/wiki/Touko_Yonera"]]
  },
  {
    t: "Misato（不存在的朋友）", c: "canon", s: "官方", tier: 6,
    d: "游戏里玲音中学时代的朋友，后来被发现根本不存在。玲音拼命寻找她存在过的证据，却发现连一起买的画材都不见了。",
    e: [["lain.wiki · Misato", "https://lain.wiki/wiki/Misato"], ["lain.wiki · The Nightmare of Fabrication", "https://lain.wiki/wiki/The_Nightmare_of_Fabrication"]]
  },
  {
    t: "「爱丽丝 6」（1995）", c: "media", s: "社区", tier: 6,
    d: "小中千昭在 Lain 之前写的「区域码电视剧」：只在静冈播出、以电话区号 054 命名的一次性深夜剧。它是 Lain 的直系前身，也是几乎没人看过的失传媒体。",
    e: [["lain.wiki · Alice 6", "https://lain.wiki/wiki/Alice_6"]]
  },
  {
    t: "lainTTL（2019–2028 的二次创作许可）", c: "meta", s: "官方", tier: 6,
    d: "NBCUniversal 的上田耕行亲自写公告：到 2028 年 7 月 6 日（30 周年）为止，日本国内个人与无失格社团可以自由进行 Lain 的二次创作，商用非商用皆可、无需监修。",
    e: [["lainTTL 官方页", "https://www.nbcuni.co.jp/rondorobe/anime/lain/ttl/"]]
  },
  {
    t: "《Despera》——没有出现的后继作", c: "meta", s: "官方", tier: 6,
    d: "小中千昭 + 安倍吉俊 + 中村隆太郎的下一部作品，1922 年东京、14 岁的少女 Ain 造出没有科学依据的机器。导演 2013 年去世，企划至今悬着。",
    e: [["lain.wiki · Despera", "https://lain.wiki/wiki/Despera"]]
  },

  /* ===================== TIER 7 ===================== */
  {
    t: "肯辛顿实验 = 费城实验的模型", c: "doubt", s: "半官方", tier: 7,
    d: "《Scenario Experiments Lain》的脚注明说：肯辛顿实验是以「费城实验」为原型写的。也就是说，剧中那场失败的超能力实验，源头是一则海军隐形传说的都市怪谈。",
    e: [["lain.wiki · KIDS", "https://lain.wiki/wiki/KIDS"]]
  },
  {
    t: "《Scenario Experiments Lain》的脚注", c: "meta", s: "官方", tier: 7,
    d: "小中千昭的剧本集，附大量脚注与分镜。很多「设定」只存在于这本书里——包括教授命名的来历、肯辛顿实验的原型、以及那些没拍出来的镜头。",
    e: [["lain.wiki · Scenario Experiments Lain", "https://lain.wiki/wiki/Scenario_Experiments_Lain"]]
  },
  {
    t: "「第 14 层」不存在", c: "glitch", s: "无来源", tier: 7,
    d: "正片只有 13 层。所谓「第 14 层」是粉丝之间流传的说法，没有任何官方材料支持。但它太好用了——本站把它做成了冰山的最底一格。",
    e: [["lain.wiki · 各层索引", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },
  {
    t: "《爱丽丝梦游仙境》的对应表", c: "theory", s: "半官方", tier: 7,
    d: "爱丽丝、柴郡猫、老鼠（Nezumi）、兔子先生、掉进洞里的结构——小中千昭把 Carroll 的童话拆成了零件，装进一部关于网络的动画里。",
    e: [["lain.wiki · Cheshire Cat", "https://lain.wiki/wiki/Cheshire_Cat"], ["lain.wiki · Mr. Rabbit", "https://lain.wiki/wiki/Mr._Rabbit"]]
  },
  {
    t: "兔子先生（Mr. Rabbit）", c: "canon", s: "官方", tier: 7,
    d: "游戏里在 Wired 上教玲音黑客技术的朋友。它是「引路人」这个角色的动物化——也是本图标题《兔子洞》的直接出处之一。",
    e: [["lain.wiki · Mr. Rabbit", "https://lain.wiki/wiki/Mr._Rabbit"]]
  },
  {
    t: "Knights of the Lambda Calculus", c: "world", s: "社区", tier: 7,
    d: "MIT 的 Scheme 爱好者自组的半虚构团体，名字被拿去当了「东方算法骑士团」。λ 演算是计算理论最基础的形式化之一——所以「骑士团」其实是在崇拜计算本身。",
    e: [["lain.wiki · Knights", "https://lain.wiki/wiki/Knights_of_the_Eastern_Calculus"]]
  },
  {
    t: "Tachibana 是橘子", c: "theory", s: "社区", tier: 7,
    d: "Tachibana 是一种柑橘。研究者 Lawrence Eng 提出：这个命名是为了对应 Apple——剧中的大公司用水果起名，像在暗示它就是这个世界的苹果。",
    e: [["lain.wiki · Tachibana", "https://lain.wiki/wiki/Tachibana_General_Laboratories"]]
  },
  {
    t: "Cyberia 与 Rushkoff 的书", c: "world", s: "社区", tier: 7,
    d: "Douglas Rushkoff 1994 年的《Cyberia: Life in the Trenches of Hyperspace》讲技术、药物与亚文化；现实中最早的一批网咖里也有一家叫 Cyberia。剧中的夜店是这本书的具象化。",
    e: [["lain.wiki · Cyberia", "https://lain.wiki/wiki/Cyberia"]]
  },
  {
    t: "《The Nightmare of Fabrication》", c: "canon", s: "官方", tier: 7,
    d: "安倍吉俊画的全彩同人志，收在画集《Omnipresence in Wired》里，被设定为游戏里缺失的「Dc1029」档案。它讲的是玲音为了不孤独，把玩具狗开膛装进电路。",
    e: [["lain.wiki · The Nightmare of Fabrication", "https://lain.wiki/wiki/The_Nightmare_of_Fabrication"]]
  },
  {
    t: "画集《Omnipresence in Wired》", c: "goods", s: "官方", tier: 7,
    d: "1999 年日本限定，2006 年大幅改订为《ab# rebuild》并在美国发行。原版与改订版的页序、插图、文字都不同——同一本画集有两个互不相同的版本。",
    e: [["lain.wiki · Omnipresence in Wired", "https://lain.wiki/wiki/Omnipresence_in_Wired"]]
  },
  {
    t: "「Lain 只有 13 集，但有 14 个标题」", c: "glitch", s: "无来源", tier: 7,
    d: "粉丝圈里流传过「其实存在第 14 个副标题/第 0 层」的说法。查遍脚本集与官方索引都找不到。这类「多出来的一层」是兔子洞最经典的增生方式。",
    e: [["lain.wiki · 主条目", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },
  {
    t: "「无脸的玲音」", c: "glitch", s: "半官方", tier: 7,
    d: "多集里玲音的脸会被抹掉或替换成别人的脸，尤其在 Wired 场景。制作上这是刻意的：脸部是最容易被「认成某个人」的部位，去掉它，玲音就变成接口。",
    e: [["lain.wiki · Key Frames", "https://lain.wiki/wiki/Key_Frames"]]
  },
  {
    t: "「Lain 是 EVA 的反面」", c: "theory", s: "社区", tier: 7,
    d: "常见的对照读法：《EVA》说人是孤独的、心之壁无法拆除；《Lain》说人早就连在一起了、这才是恐怖之处。这类读解没有任何官方背书，但流传极广。",
    e: [["lain.wiki · 主条目 · 评价", "https://lain.wiki/wiki/Serial_Experiments_Lain"]]
  },
  {
    t: "「Cyberia 没有年龄限制」", c: "doubt", s: "官方", tier: 7,
    d: "设定上，这家夜店对未成年人没有任何限制——14 岁的女孩可以随便进出、买药、看人开枪。这句话本身比任何鬼故事都冷。",
    e: [["lain.wiki · Cyberia", "https://lain.wiki/wiki/Cyberia"]]
  }

  ]
};
