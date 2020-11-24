const birthday = {
  0: {
    score: 80,
    title: '最佳拍档',
    desc: '你们是想法一致的情侣，不过就因为同构型太高，有时会有点闷，药剂是得多制造些生活趣味，多说些甜言蜜语给对方听~'
  },
  1: {
    score: 85,
    title: '一见钟情',
    desc: '你们一见到对方就难舍难分，还在等什么！心动不如马上行动~'
  },
  2: {
    score: 35,
    title: '互相利用',
    desc: '两人爱对方时都会互相评估相爱的利益得失，一旦有弊无利，两人的恋情就完了~'
  },
  3: {
    score: 25,
    title: '互相猜疑',
    desc: '有一方疑心病特重，对方一有风吹草动，就会往坏的地方想，对方又懒的解释，这样下去，迟早分手~'
  },
  4: {
    score: 70,
    title: '美好邂逅',
    desc: '两人偶然相遇，志趣相投，随即陷入热恋，两人越看越相衬~'
  },
  5: {
    score: 60,
    title: '主仆关系',
    desc: '双方需能体会相爱是信任与互相依赖，爱情才有转机~'
  },
  6: {
    score: 90,
    title: '幸运情侣',
    desc: '一开始交往，就会互相带来好运，要互相疼爱，关系才会长久~'
  },
  7: {
    score: 45,
    title: '彼此难受',
    desc: '两人互看不顺眼，有时会以半开玩笑的方式说出对彼此的不满，但仍会互相包容来持恋情~'
  },
  8: {
    score: 55,
    title: '先甘后苦',
    desc: '男方会适时讨好女方，让女孩子觉得好甜蜜，事事都有男方帮忙分担。但有时会物极必反，觉得自己好象没有存在价值~'
  },
  9: {
    score: 60,
    title: '似远还近',
    desc: '双方个性不同，想法又各异，但竟然还可成为情侣，双方需互相迁就才能甜蜜度日~'
  },
  10: {
    score: 25,
    title: '彼此难受',
    desc: '两人是斗嘴佳偶，双方常持相反意见，能长久在一起简直是奇迹~'
  },
  11: {
    score: 80,
    title: '平淡见真情',
    desc: '两人感情是细水长流型，有好结局的可能性很高~'
  },
  12: {
    score: 15,
    title: '似爱非爱',
    desc: '一方很情绪化，动不动就不理人，另一方要有好脾气才能忍受~'
  },
  13: {
    score: 50,
    title: '似爱非爱',
    desc: '双方价值观不同，但又对彼此有超强的吸引力，相处初期有新鲜感，但长久之计仍要努力~'
  },
  14: {
    score: 10,
    title: '不搭调',
    desc: '两人如同水与火，八竿子打不着，不知是如何走在一起的，一刹那爱情光辉可不代表永恒~'
  },
  15: {
    score: 70,
    title: '妹妹情人',
    desc: '女方没自信，一切事情以男友为依归，凡是以男友为主，有时会让对方觉得有点烦~'
  },
  16: {
    score: 45,
    title: '强弱组合',
    desc: '男方是领导人，女方也甘愿做个小鸟依人的女子'
  },
  17: {
    score: 20,
    title: '分手收场',
    desc: '两人找不到相同点，分手是迟早的事。唯一补救方法是完全相信彼此~'
  },
  18: {
    score: 30,
    title: '痴迷情人',
    desc: '男方说月亮是方的，女方也点头称是，简直爱到无理智可言~'
  },
  19: {
    score: 20,
    title: '分手收场',
    desc: '两人找不到相同点，分手是迟早的事。唯一补救方法是完全相信彼此~'
  },
  20: {
    score: 45,
    title: '变心难免',
    desc: '热恋时会迁就对方，一旦变心就无法挽救~'
  },
  21: {
    score: 15,
    title: '孽缘',
    desc: '两人在一起就像一个生虫的苹果早晚腐烂，除非有人肯事事妥协~'
  },
  22: {
    score: 85,
    title: '完美情人',
    desc: '女方一见到男方，就会被对方丰富的学识及人生经验所倾倒，而义反顾的相爱~'
  },
  23: {
    score: 5,
    title: '早散早好',
    desc: '一定是上天要整你，才让你们在一起，两人的恋情难有未来~'
  },
  24: {
    score: 65,
    title: '说谎情人',
    desc: '虽是爱人，但都不说真话，又互相知道对方的底细，何时才能坦白~'
  },
  25: {
    score: 15,
    title: '知己朋友',
    desc: '两人的关系不能说是爱情，只能说是互相尊重的知己朋友，相处的过程像白开水一样，淡而无味~'
  },
  26: {
    score: 55,
    title: '欢喜冤家',
    desc: '小俩口一见面就吵，越吵感情越好，不过有时也要互相学习尊重喔'
  },
  27: {
    score: 80,
    title: '人间绝配',
    desc: '最佳情侣组合，令人羡慕。双方都为对方着想，互相欣赏~'
  },
  28: {
    score: 30,
    title: '暴力情侣',
    desc: '小俩口总吵吵闹闹的，有时不只出口伤人，还会拳脚相向，感情像走钢索般的不稳~'
  },
  29: {
    score: 60,
    title: '分分合合',
    desc: '情路多波折，成日与爱人分分合合，有时还可能发生三角关系，害周遭朋友为你担心~'
  },
  30: {
    score: 95,
    title: '超尘脱俗',
    desc: '虽然没人看好你的这段感情，但你身在其中，尽情享受爱情光辉的每分每秒'
  },
}

const hourScore = [0.11, 0.33, 0.66, 0.88, 0.99]

/**
 * {
 *   year: ''
 *   day: ''
 *   month: ''
 *   hour: ''
 * }
 */
function countBirthdayFate(b1, b2) {
  const fate = birthday[Math.abs(b2.day - b1.day)]
  let additionalScore = Math.floor(Math.abs((b2.hour - b1.hour)) / 2)
  if (additionalScore === 6 || additionalScore === 0) {
    additionalScore = 1
  }
  fate.score += additionalScore + hourScore[additionalScore - 1]
  fate.score = fate.score.toFixed(2)
  return fate
}

console.log(countBirthdayFate({day: 9, hour: 12}, {day: 12, hour: 3}));