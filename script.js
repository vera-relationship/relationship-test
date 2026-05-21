// 测试题目数据
const questions = [
    {
        question: "当对方突然冷淡，你通常会：",
        options: [
            { key: 'A', text: '反复想自己是不是做错了' },
            { key: 'B', text: '表面冷静，内心很慌' },
            { key: 'C', text: '假装无所谓' },
            { key: 'D', text: '更努力对他好' },
            { key: 'E', text: '想要马上把问题讲清楚' }
        ]
    },
    {
        question: "在关系中你更常：",
        options: [
            { key: 'A', text: '害怕被抛弃' },
            { key: 'B', text: '害怕失控' },
            { key: 'C', text: '害怕被看穿脆弱' },
            { key: 'D', text: '害怕自己不够好' },
            { key: 'E', text: '害怕关系变得平淡' }
        ]
    },
    {
        question: "分手后你通常：",
        options: [
            { key: 'A', text: '反复复盘自己哪里错了' },
            { key: 'B', text: '很快投入工作或新的事情，让自己不要多想' },
            { key: 'C', text: '表面理性，内心反复想' },
            { key: 'D', text: '怕自己再也遇不到合适的人' },
            { key: 'E', text: '想挽回，不甘心就这样结束' }
        ]
    },
    {
        question: "当发生冲突时，你倾向：",
        options: [
            { key: 'A', text: '先道歉' },
            { key: 'B', text: '讲逻辑' },
            { key: 'C', text: '冷处理' },
            { key: 'D', text: '更努力理解对方' },
            { key: 'E', text: '情绪爆发' }
        ]
    },
    {
        question: "你更容易被哪种人吸引：",
        options: [
            { key: 'A', text: '情绪不稳定但有魅力的人' },
            { key: 'B', text: '理性疏离型' },
            { key: 'C', text: '需要被拯救的人' },
            { key: 'D', text: '成熟强势的人' },
            { key: 'E', text: '若即若离的人' }
        ]
    },
    {
        question: "在关系中，你最难做到的是：",
        options: [
            { key: 'A', text: '表达真实需求' },
            { key: 'B', text: '放松控制' },
            { key: 'C', text: '接受不确定性' },
            { key: 'D', text: '允许自己不完美' },
            { key: 'E', text: '接受平淡' }
        ]
    },
    {
        question: "你是否经常：",
        options: [
            { key: 'A', text: '过度解读对方行为' },
            { key: 'B', text: '用理性压住情绪' },
            { key: 'C', text: '觉得自己给得更多' },
            { key: 'D', text: '怕对方离开' },
            { key: 'E', text: '不知道自己真正想要什么' }
        ]
    },
    {
        question: "当关系出现问题，你第一反应：",
        options: [
            { key: 'A', text: '自责' },
            { key: 'B', text: '分析' },
            { key: 'C', text: '抽离' },
            { key: 'D', text: '讨好' },
            { key: 'E', text: '追问' }
        ]
    },
    {
        question: "你童年时期更接近：",
        options: [
            { key: 'A', text: '需要表现才被认可' },
            { key: 'B', text: '情绪不被回应' },
            { key: 'C', text: '关系疏离' },
            { key: 'D', text: '父母冲突多' },
            { key: 'E', text: '被期待成熟懂事' }
        ]
    },
    {
        question: "你最常对自己说：",
        options: [
            { key: 'A', text: '是不是我太敏感' },
            { key: 'B', text: '我应该理性一点' },
            { key: 'C', text: '算了别想了' },
            { key: 'D', text: '我再努力一点就好了' },
            { key: 'E', text: '他到底怎么想' }
        ]
    },
    {
        question: "当关系变得稳定时，你会：",
        options: [
            { key: 'A', text: '担心对方会突然变心' },
            { key: 'B', text: '开始挑剔细节' },
            { key: 'C', text: '慢慢降低投入' },
            { key: 'D', text: '更努力维持关系' },
            { key: 'E', text: '觉得少了激情' }
        ]
    },
    {
        question: "如果对方需要空间，你会：",
        options: [
            { key: 'A', text: '焦虑不安' },
            { key: 'B', text: '表面理解，内心控制欲上升' },
            { key: 'C', text: '顺势退得更远' },
            { key: 'D', text: '想办法让自己更好' },
            { key: 'E', text: '频繁确认关系状态' }
        ]
    },
    {
        question: "在亲密表达上，你更常：",
        options: [
            { key: 'A', text: '过度表达情绪' },
            { key: 'B', text: '用理性沟通代替情绪' },
            { key: 'C', text: '避免谈太深' },
            { key: 'D', text: '通过行动证明' },
            { key: 'E', text: '需要不断确认爱意' }
        ]
    },
    {
        question: "当对方情绪低落，你会：",
        options: [
            { key: 'A', text: '担心是因为自己' },
            { key: 'B', text: '给建议解决问题' },
            { key: 'C', text: '保持距离' },
            { key: 'D', text: '拼命安抚' },
            { key: 'E', text: '想知道自己在他心里的位置' }
        ]
    },
    {
        question: "你更容易陷入的循环是：",
        options: [
            { key: 'A', text: '追逐—焦虑' },
            { key: 'B', text: '控制—失控' },
            { key: 'C', text: '靠近—后退' },
            { key: 'D', text: '付出—失衡' },
            { key: 'E', text: '热烈—失落' }
        ]
    },
    {
        question: "在关系里，你最想避免的是：",
        options: [
            { key: 'A', text: '被抛弃' },
            { key: 'B', text: '被挑战权威' },
            { key: 'C', text: '被情绪淹没' },
            { key: 'D', text: '被否定价值' },
            { key: 'E', text: '被忽视' }
        ]
    },
    {
        question: "你对承诺的态度是：",
        options: [
            { key: 'A', text: '需要很多确认才安心' },
            { key: 'B', text: '理性评估是否值得' },
            { key: 'C', text: '害怕被束缚' },
            { key: 'D', text: '愿意为关系投入一切' },
            { key: 'E', text: '害怕承诺变成枷锁' }
        ]
    },
    {
        question: "当对方赞美你时，你会：",
        options: [
            { key: 'A', text: '觉得不真实' },
            { key: 'B', text: '分析他是否真心' },
            { key: 'C', text: '轻描淡写带过' },
            { key: 'D', text: '更加努力表现' },
            { key: 'E', text: '期待更多回应' }
        ]
    },
    {
        question: "面对未来的不确定，你会：",
        options: [
            { key: 'A', text: '焦虑失眠' },
            { key: 'B', text: '制定计划控制风险' },
            { key: 'C', text: '减少投入' },
            { key: 'D', text: '努力提升自己' },
            { key: 'E', text: '希望关系给你确定感' }
        ]
    },
    {
        question: "你真正渴望的是：",
        options: [
            { key: 'A', text: '稳定安全感' },
            { key: 'B', text: '尊重与掌控感' },
            { key: 'C', text: '自由空间' },
            { key: 'D', text: '被认可价值' },
            { key: 'E', text: '持续的热烈回应' }
        ]
    }
];

// 8种关系模式类型完整数据
const resultTypes = {
    RM01: {
        code: 'RM-01',
        index: 'No. 01 / 08',
        englishTitle: 'Repeated Confirmation',
        name: '反复确认型',
        quote: '"你需要被不断证明。"',
        persona: `<p>在关系里，你不是没有自信。</p>
<p>你只是很难在"没有回应"的状态里安稳下来。</p>
<p>&nbsp;</p>
<p>当对方回复慢一点，当语气稍微冷一点，</p>
<p>你脑海里会迅速出现各种推演。</p>
<p>&nbsp;</p>
<p>是不是我说错话了？</p>
<p>是不是他在变心？</p>
<p>是不是我不够好？</p>
<p>&nbsp;</p>
<p>你并不想多想，</p>
<p>但你的系统习惯用"预判风险"来避免失去。</p>`,
        mechanism: `<p>当连接出现波动，你的焦虑系统会立刻被激活。</p>
<p>你会通过确认、提问、反复沟通来恢复稳定。</p>
<p>&nbsp;</p>
<p>短期内，这确实能缓解不安。</p>
<p>但长期来看，你会越来越依赖外部回应。</p>
<p>&nbsp;</p>
<p>你不是想控制对方，</p>
<p>你只是无法承受"不确定"。</p>`,
        needs: `<p>你真正渴望的，是稳定而清晰的爱。</p>
<p>是那种不需要反复确认也能存在的连接。</p>
<p>&nbsp;</p>
<p>你希望被坚定地选择。</p>`,
        beliefs: `<p class="belief-text">"爱是会消失的"</p>
<p class="belief-text">"如果我不够好，就会被替代"</p>
<p class="belief-text">"我必须时刻保持价值"</p>
<p class="belief-text">"别人最终都会离开"</p>
<p class="belief-text">"安全感来自对方的回应"</p>
<p>&nbsp;</p>
<p>这些信念往往来自早期的情感不稳定经历。</p>
<p>也可能来自反复被忽略、被比较、被否定的体验。</p>`,
        healing: `<p>这类模式通常与"被遗弃"或"价值焦虑"有关。</p>
<p>&nbsp;</p>
<p>疗愈并不是让你变得冷静，</p>
<p>而是让你重新建立一个内在认知：</p>
<p>&nbsp;</p>
<p class="belief-text">"爱可以是持续的"</p>
<p class="belief-text">"即使没有即时回应，我依然是安全的"</p>
<p class="belief-text">"我的价值不依赖表现"</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你第一次觉得"我必须证明自己才会被爱"是什么时候？</p>
<p>那个信念是否仍然真实？</p>
<p>&nbsp;</p>
<p>当这个核心信念被清理，</p>
<p>你会发现，你不再需要那么多确认。</p>
<p>你依然可以渴望爱，但不再恐慌。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"安全型依恋"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>在关系中保持适度的独立与亲密，</p>
<p>不因对方的暂时冷淡而过度焦虑；</p>
<p>&nbsp;</p>
<p>能够信任对方，也信任自己；</p>
<p>&nbsp;</p>
<p>即使没有即时回应，</p>
<p>你依然相信这段关系的稳定性。</p>
<p>&nbsp;</p>
<p>爱成为你的底气，</p>
<p>而不是你的软肋。</p>`
    },
    RM02: {
        code: 'RM-02',
        index: 'No. 02 / 08',
        englishTitle: 'Emotional Sensitivity',
        name: '情绪敏感型',
        quote: '"你对变化格外敏锐。"',
        persona: `<p>你能很快察觉气氛的改变。</p>
<p>一句话的语气，一个眼神的停顿，都逃不过你的感知。</p>
<p>&nbsp;</p>
<p>在关系里，你总是第一个感到"哪里不对"。</p>
<p>但这份敏锐，也让你活得很紧绷。</p>
<p>&nbsp;</p>
<p>当对方情绪波动，你会立刻进入紧张状态。</p>
<p>你会反复揣测，试图提前避免冲突。</p>
<p>&nbsp;</p>
<p>你不是多疑，你只是太警觉。</p>`,
        mechanism: `<p>你的系统习惯扫描风险。</p>
<p>一旦察觉到冷淡或距离，你会自动放大信号。</p>
<p>&nbsp;</p>
<p>你可能会主动修复关系，</p>
<p>也可能陷入反复思考。</p>
<p>&nbsp;</p>
<p>你对连接非常在乎，</p>
<p>但也因此常常疲惫。</p>`,
        needs: `<p>你渴望稳定、透明的情绪环境。</p>
<p>渴望对方的表达是清晰的、明确的。</p>
<p>&nbsp;</p>
<p>你希望关系是安全的，而不是忽冷忽热。</p>`,
        beliefs: `<p class="belief-text">"情绪变化意味着危险"</p>
<p class="belief-text">"冷淡就是拒绝"</p>
<p class="belief-text">"如果我不警觉，就会受伤"</p>
<p class="belief-text">"爱从来都不稳定"</p>
<p class="belief-text">"关系随时可能崩塌"</p>
<p>&nbsp;</p>
<p>这些信念通常形成于情绪环境不稳定的经历中。</p>`,
        healing: `<p>疗愈的关键，不是让你变得迟钝。</p>
<p>而是帮助你区分——</p>
<p>&nbsp;</p>
<p>什么是当下真实发生的事，</p>
<p>什么是过去经验在投射。</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你第一次觉得"情绪变化等于危险"是什么时候？</p>
<p>你是否一直活在那一次的预警里？</p>
<p>&nbsp;</p>
<p>当你的系统学会放松，</p>
<p>敏锐会变成优势，而不是负担。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"情绪稳定力"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>敏锐地察觉情绪，但不被情绪淹没；</p>
<p>能够区分他人的情绪与自己的情绪；</p>
<p>&nbsp;</p>
<p>在关系中保持平和，</p>
<p>既能感受连接，也不惧怕变化；</p>
<p>&nbsp;</p>
<p>你的敏锐成为读懂对方的优势，</p>
<p>而不是自我消耗的源头。</p>`
    },
    RM03: {
        code: 'RM-03',
        index: 'No. 03 / 08',
        englishTitle: 'Overgiving',
        name: '过度付出型',
        quote: '"你用给予换安心。"',
        persona: `<p>在关系里，你习惯多做一点。</p>
<p>你会主动承担、体贴、迁就。</p>
<p>&nbsp;</p>
<p>你很少提出自己的需求。</p>
<p>你更习惯默默付出。</p>
<p>&nbsp;</p>
<p>当关系出现裂缝，你会更加努力。</p>
<p>仿佛只要做得足够多，就不会被放弃。</p>
<p>&nbsp;</p>
<p>你看起来很独立，</p>
<p>但内心其实很害怕被忽视。</p>`,
        mechanism: `<p>你通过"有用""被需要"来确认自己的位置。</p>
<p>当对方依赖你，你会感到安心。</p>
<p>&nbsp;</p>
<p>但当付出没有回应，你会开始失落。</p>
<p>甚至怀疑自己的价值。</p>`,
        needs: `<p>你真正渴望的，是被看见。</p>
<p>不是因为付出，而是因为存在。</p>
<p>&nbsp;</p>
<p>你希望有人愿意为你停下来。</p>`,
        beliefs: `<p class="belief-text">"我只有付出才有价值"</p>
<p class="belief-text">"如果我不努力，就会被替代"</p>
<p class="belief-text">"爱需要交换"</p>
<p class="belief-text">"我不能成为负担"</p>
<p class="belief-text">"被需要才等于被爱"</p>
<p>&nbsp;</p>
<p>这些信念通常形成于"不被看见"的成长经历中。</p>`,
        healing: `<p>疗愈不是让你停止给予，</p>
<p>而是帮助你松动一个等式：</p>
<p>&nbsp;</p>
<p>价值 ≠ 付出。</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你什么时候开始相信"必须有用才能被爱"？</p>
<p>如果什么都不做，你是否依然值得？</p>
<p>&nbsp;</p>
<p>当你允许自己被给予，</p>
<p>关系才会真正平衡。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"配得感"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>坦然地接受爱与付出，</p>
<p>不因"没做什么"而感到不安；</p>
<p>&nbsp;</p>
<p>在关系中保持平衡，</p>
<p>既能付出，也能接受；</p>
<p>&nbsp;</p>
<p>你不需要证明自己的价值，</p>
<p>因为你本身就已经足够好。</p>`
    },
    RM04: {
        code: 'RM-04',
        index: 'No. 04 / 08',
        englishTitle: 'Attachment Anxiety',
        name: '粘连依附型',
        quote: '"连接不能断。"',
        persona: `<p>你对分离极度敏感。</p>
<p>一旦距离拉开，你会感到明显的不安。</p>
<p>&nbsp;</p>
<p>你渴望随时确认对方还在。</p>
<p>失联、冷淡、减少联系，都会触发焦虑。</p>
<p>&nbsp;</p>
<p>孤独对你来说不是安静，</p>
<p>而是一种被丢下的感觉。</p>`,
        mechanism: `<p>当连接变弱，你会本能地靠近。</p>
<p>通过频繁联系、确认存在感来维持安全。</p>
<p>&nbsp;</p>
<p>短期有效，</p>
<p>但也可能让关系变得紧绷。</p>`,
        needs: `<p>你渴望持续的陪伴。</p>
<p>渴望稳定的存在感。</p>
<p>&nbsp;</p>
<p>你想知道：</p>
<p>我不会被丢下。</p>`,
        beliefs: `<p class="belief-text">"分开等于失去"</p>
<p class="belief-text">"独处是不安全的"</p>
<p class="belief-text">"没有人陪伴我就不完整"</p>
<p class="belief-text">"如果对方不回应，就是不在乎"</p>
<p>&nbsp;</p>
<p>这些信念通常与早期的分离创伤有关。</p>`,
        healing: `<p>真正需要建立的，是独处的安全感。</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你第一次觉得"被分开等于被抛弃"是什么时候？</p>
<p>那个经历是否还在影响你现在的关系？</p>
<p>&nbsp;</p>
<p>当你学会稳住自己，</p>
<p>连接就不再是一种恐慌，而是一种选择。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"独处安全感"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>在独处时感到平静与充实，</p>
<p>不因暂时的不联系而恐慌；</p>
<p>&nbsp;</p>
<p>能够信任关系的稳定性，</p>
<p>相信对方忙碌时依然在乎你；</p>
<p>&nbsp;</p>
<p>连接成为生活的锦上添花，</p>
<p>而非唯一的安全感来源。</p>`
    },
    RM05: {
        code: 'RM-05',
        index: 'No. 05 / 08',
        englishTitle: 'Approach-Retreat',
        name: '靠近后退型',
        quote: '"越在乎，越想退。"',
        persona: `<p>你并不是不想亲密。</p>
<p>你只是害怕失去控制。</p>
<p>&nbsp;</p>
<p>当关系变得重要，你会突然冷下来。</p>
<p>你需要空间，需要理性，需要抽离。</p>
<p>&nbsp;</p>
<p>你在保护自己，</p>
<p>但也因此错过真正的靠近。</p>`,
        mechanism: `<p>当情绪强度升高，你会自动后退。</p>
<p>通过理性分析来降低情绪波动。</p>
<p>&nbsp;</p>
<p>退一步，你会安心。</p>
<p>但关系却停在原地。</p>`,
        needs: `<p>你渴望安全地靠近。</p>
<p>既不被吞没，也不被伤害。</p>`,
        beliefs: `<p class="belief-text">"亲密最终会带来伤害"</p>
<p class="belief-text">"暴露真实是不安全的"</p>
<p class="belief-text">"依赖别人会失去力量"</p>
<p class="belief-text">"投入就意味着风险"</p>
<p>&nbsp;</p>
<p>这些信念通常来自过去的受伤经历。</p>`,
        healing: `<p>疗愈的关键，是重新定义"亲密"。</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你什么时候学会了"靠近等于危险"？</p>
<p>你是否还在为过去的伤口设防？</p>
<p>&nbsp;</p>
<p>当你允许自己慢慢留下，</p>
<p>你会发现，爱并不是威胁。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"可控的亲密力"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>在靠近时保持自我，</p>
<p>不因亲密而失去边界；</p>
<p>&nbsp;</p>
<p>既能享受深度连接，</p>
<p>也能保有独立空间；</p>
<p>&nbsp;</p>
<p>你可以勇敢地靠近，</p>
<p>也能在需要时优雅地后退。</p>`
    },
    RM06: {
        code: 'RM-06',
        index: 'No. 06 / 08',
        englishTitle: 'Slow Warming',
        name: '慢热观察型',
        quote: '"你习惯先确认安全。"',
        persona: `<p>你进入关系很慢。</p>
<p>你需要时间判断对方是否可靠。</p>
<p>&nbsp;</p>
<p>你不轻易表达情绪。</p>
<p>不是没有，而是谨慎。</p>
<p>&nbsp;</p>
<p>你在关系里稳重、克制、理性。</p>
<p>但真正打开自己，需要很久。</p>`,
        mechanism: `<p>你通过观察来建立安全。</p>
<p>你更相信时间，而不是承诺。</p>
<p>&nbsp;</p>
<p>在确认之前，你始终保留距离。</p>`,
        needs: `<p>你渴望可信任的环境。</p>
<p>渴望不会轻易崩塌的关系。</p>`,
        beliefs: `<p class="belief-text">"人不能轻易相信"</p>
<p class="belief-text">"提前暴露会受伤"</p>
<p class="belief-text">"真正安全很少见"</p>
<p class="belief-text">"情绪表达会被利用"</p>
<p>&nbsp;</p>
<p>这些信念通常来自被辜负或被伤害的经历。</p>`,
        healing: `<p>疗愈的重点，是修复对"信任"的定义。</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你第一次觉得"相信别人会吃亏"是什么时候？</p>
<p>那次经历是否仍在主导你？</p>
<p>&nbsp;</p>
<p>当你慢慢放下防备，</p>
<p>你会发现，信任不是冒险，而是选择。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"选择性信任力"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>在保持谨慎的同时，</p>
<p>允许关系逐步深入；</p>
<p>&nbsp;</p>
<p>既能保护自己，</p>
<p>也能享受信任带来的亲密；</p>
<p>&nbsp;</p>
<p>你依然谨慎，但不再封闭；</p>
<p>你依然观察，但开始愿意相信。</p>`
    },
    RM07: {
        code: 'RM-07',
        index: 'No. 07 / 08',
        englishTitle: 'Control Rhythm',
        name: '掌控节奏型',
        quote: '"你害怕失控。"',
        persona: `<p>你不喜欢模糊。</p>
<p>你需要明确、规则、方向。</p>
<p>&nbsp;</p>
<p>在关系里，你往往是主导节奏的人。</p>
<p>当事情脱离预期，你会明显不安。</p>
<p>&nbsp;</p>
<p>你不是强势，</p>
<p>你只是需要确定。</p>`,
        mechanism: `<p>你通过设定规则来建立稳定。</p>
<p>当对方不可预测，你会焦躁。</p>
<p>&nbsp;</p>
<p>控制，是你对抗混乱的方式。</p>`,
        needs: `<p>你渴望秩序。</p>
<p>渴望可预测的关系走向。</p>`,
        beliefs: `<p class="belief-text">"失控等于危险"</p>
<p class="belief-text">"如果不掌握主动就会受伤"</p>
<p class="belief-text">"情绪是不可靠的"</p>
<p class="belief-text">"爱需要被管理"</p>
<p>&nbsp;</p>
<p>这些信念通常与成长环境的不确定性有关。</p>`,
        healing: `<p>疗愈不是让你放弃理性，</p>
<p>而是让你在不确定中依然稳住自己。</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你什么时候开始害怕"失控"？</p>
<p>你是否一直在对抗某种混乱？</p>
<p>&nbsp;</p>
<p>当安全感来自内部，</p>
<p>关系就不再是一场博弈。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"内在稳定性"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>在关系中保持从容，</p>
<p>不因对方的变化而焦虑；</p>
<p>&nbsp;</p>
<p>既能享受有序，</p>
<p>也能接纳不确定；</p>
<p>&nbsp;</p>
<p>你不再需要控制一切，</p>
<p>因为你知道——无论发生什么，你都能应对。</p>`
    },
    RM08: {
        code: 'RM-08',
        index: 'No. 08 / 08',
        englishTitle: 'Rational Suppression',
        name: '理性压情型',
        quote: '"情绪必须被收好。"',
        persona: `<p>你更信逻辑，不信感觉。</p>
<p>当冲突出现，你会分析，而不是表达。</p>
<p>&nbsp;</p>
<p>你很冷静，也很克制。</p>
<p>但很多真实情绪被你压在心里。</p>
<p>&nbsp;</p>
<p>你不喜欢失态。</p>
<p>你更愿意做那个清醒的人。</p>`,
        mechanism: `<p>当情绪升高，你会理性化。</p>
<p>把感觉转化成道理。</p>
<p>&nbsp;</p>
<p>短期内稳定，</p>
<p>长期却越来越疏离。</p>`,
        needs: `<p>你渴望被理解，</p>
<p>但不想显得脆弱。</p>`,
        beliefs: `<p class="belief-text">"情绪会带来麻烦"</p>
<p class="belief-text">"表达脆弱是不成熟"</p>
<p class="belief-text">"冷静才值得被尊重"</p>
<p class="belief-text">"感觉是不可靠的"</p>
<p>&nbsp;</p>
<p>这些信念通常形成于情绪不被接纳的环境中。</p>`,
        healing: `<p>疗愈的关键，是允许情绪存在。</p>
<p>&nbsp;</p>
<p>我们会探索：</p>
<p>&nbsp;</p>
<p>你什么时候学会了"压住情绪"？</p>
<p>那个时刻，你是否别无选择？</p>
<p>&nbsp;</p>
<p>当你允许感觉流动，</p>
<p>理性才会真正成为力量。</p>`,
        ideal: `<p>疗愈后的理想状态，是拥有"情绪流动力"。</p>
<p>&nbsp;</p>
<p>你能够：</p>
<p>&nbsp;</p>
<p>感受情绪、表达情绪，</p>
<p>不因情绪而感到羞耻；</p>
<p>&nbsp;</p>
<p>既有理性思考的能力，</p>
<p>也能拥戴真实的情感；</p>
<p>&nbsp;</p>
<p>你不再压抑自己，</p>
<p>而是让情绪成为生命的礼物。</p>`
    }
};

let currentQuestion = 0;
let answers = {};

// 显示页面
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// 开始测试
function startTest() {
    currentQuestion = 0;
    answers = {};
    showPage('quiz-page');
    loadQuestion();
}

// 加载题目
function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = `option-btn ${answers[currentQuestion] === option.key ? 'selected' : ''}`;
        button.innerHTML = `<span class="option-key">${option.key}.</span> ${option.text}`;
        button.onclick = () => selectOption(option.key, button);
        optionsContainer.appendChild(button);
    });
    
    updateNavButtons();
}

// 选择选项
function selectOption(key, buttonElement) {
    answers[currentQuestion] = key;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    buttonElement.classList.add('selected');
    
    // 自动跳转下一题（延迟300ms让用户看到选择效果）
    setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            // 最后一题，直接显示结果
            calculateResult();
        }
    }, 300);
}

// 更新导航按钮
function updateNavButtons() {
    const prevBtn = document.getElementById('prev-btn');
    prevBtn.disabled = currentQuestion === 0;
}

// 上一题
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// 下一题
function nextQuestion() {
    if (!answers[currentQuestion]) {
        alert('请先选择一个答案');
        return;
    }
    
    if (currentQuestion === questions.length - 1) {
        calculateResult();
    } else {
        currentQuestion++;
        loadQuestion();
    }
}

// 计算结果
function calculateResult() {
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    
    Object.values(answers).forEach(answer => {
        counts[answer]++;
    });
    
    // 统计各选项数量
    let maxCount = 0;
    let dominantType = 'A';
    
    for (const [key, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            dominantType = key;
        }
    }
    
    // 根据主要选项返回对应类型
    const typeMapping = {
        'A': 'RM01',
        'B': 'RM02',
        'C': 'RM03',
        'D': 'RM04',
        'E': 'RM05'
    };
    
    // 获取所有最大值的类型
    const topTypes = Object.entries(counts)
        .filter(([, count]) => count === maxCount)
        .map(([key]) => typeMapping[key]);
    
    // 优先选择得分较高的类型（E > D > C > B > A）
    // 这样能让结果更加多样化
    let resultKey = typeMapping[dominantType];
    
    // 如果有平局，选择类型编号较大的
    if (topTypes.length > 1) {
        const typeOrder = ['RM01', 'RM02', 'RM03', 'RM04', 'RM05'];
        for (let i = typeOrder.length - 1; i >= 0; i--) {
            if (topTypes.includes(typeOrder[i])) {
                resultKey = typeOrder[i];
                break;
            }
        }
    }
    
    showResult(resultKey);
}

// 显示结果
function showResult(resultKey) {
    const result = resultTypes[resultKey];
    
    // 填充结果内容
    document.getElementById('cover-code').textContent = result.code;
    document.getElementById('cover-index').textContent = result.index;
    document.getElementById('cover-english').textContent = result.englishTitle;
    document.getElementById('cover-chinese').textContent = result.name;
    document.getElementById('cover-quote').textContent = result.quote;
    
    document.getElementById('core-content').innerHTML = result.persona;
    document.getElementById('behavior-content').innerHTML = result.mechanism;
    document.getElementById('trigger-content').innerHTML = result.needs;
    document.getElementById('risk-content').innerHTML = result.beliefs;
    document.getElementById('advice-content').innerHTML = result.healing;
    document.getElementById('ideal-content').innerHTML = result.ideal;
    
    // 绘制雷达图并获取得分
    const scores = drawRadarChart();
    
    // 提交测评结果到服务器
    submitResult(resultKey, scores);
    
    // 滚动到顶部
    window.scrollTo(0, 0);
    
    showPage('result-page');
}

// 绘制雷达图
function drawRadarChart() {
    // 计算各选项得分
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    
    Object.values(answers).forEach(answer => {
        counts[answer]++;
    });
    
    // 将A-E得分转换为0-100的数值，调整分布使其更饱满
    // 六维度对应：焦虑倾向(A)、控制倾向(B)、疏离倾向(C)、付出倾向(D)、确认需求(E)、安全需求(综合)
    const maxScore = questions.length;
    
    // 使用非线性转换，让分数更集中在30-80区间，增加视觉饱满度
    const normalizeScore = (count) => {
        const ratio = count / maxScore;
        // 使用二次函数让中间值更突出
        return Math.round(30 + (ratio * 70));
    };
    
    const scores = [
        normalizeScore(counts.A),  // 焦虑倾向
        normalizeScore(counts.B),  // 控制倾向
        normalizeScore(counts.C),  // 疏离倾向
        normalizeScore(counts.D),  // 付出倾向
        normalizeScore(counts.E),  // 确认需求
        normalizeScore(Math.round((counts.A + counts.D + counts.E) / 3))  // 安全需求（综合计算）
    ];
    
    const ctx = document.getElementById('radar-chart').getContext('2d');
    
    // 销毁已有图表
    if (window.radarChart) {
        window.radarChart.destroy();
    }
    
    window.radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['焦虑倾向', '控制倾向', '疏离倾向', '付出倾向', '确认需求', '安全需求'],
            datasets: [{
                label: '你的人格特质',
                data: scores,
                backgroundColor: 'rgba(231, 76, 60, 0.2)',  // 品牌红半透明填充
                borderColor: 'rgba(231, 76, 60, 1)',        // 品牌红
                borderWidth: 3,                               // 线条加粗
                pointBackgroundColor: 'rgba(231, 76, 60, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(231, 76, 60, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(200, 200, 200, 0.3)'
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.3)'
                    },
                    pointLabels: {
                        color: '#8B8B8B',  // 浅灰色标签
                        font: {
                            family: "'Noto Serif SC', serif",
                            size: 11,
                            weight: 400
                        }
                    },
                    ticks: {
                        display: false,
                        maxTicksLimit: 5,
                        stepSize: 15
                    },
                    suggestedMin: 10,
                    suggestedMax: 90
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    return scores;
}

// 提交测评结果到服务器
async function submitResult(resultKey, scores) {
    try {
        const result = resultTypes[resultKey];
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type_code: result.code,
                type_name: result.name,
                answers: answers,
                scores: scores
            })
        });
        const data = await response.json();
        console.log('提交结果:', data);
    } catch (error) {
        console.error('提交失败:', error);
    }
}

// 重新测试
function restartTest() {
    showPage('home-page');
}
