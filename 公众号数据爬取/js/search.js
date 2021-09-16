// var arr = ['希腊', '荷兰', '比利时', '法国', '安道尔共和国', '西班牙', '匈牙利', '南斯拉夫', '意大利', '罗马尼亚', '瑞士', '捷克', '斯洛伐克', '奥地利', '英国', '丹麦', '瑞典', '挪威', '芬兰', '立陶宛', '拉脱维亚', '爱沙尼亚', '俄罗斯', '乌克兰', '白俄罗斯', '摩尔多瓦', '波兰', '德国', '直布罗陀', '葡萄牙', '卢森堡', '爱尔兰', '冰岛', '阿尔巴尼亚', '马耳他', '塞浦路斯', '格鲁吉亚', '亚美尼亚', '保加利亚', '土耳其', '斯洛文尼亚', '列支敦士登', '加拿大', '美国', '牙买加', '安提瓜和巴布达', '百慕大群岛', '古巴', '多米尼加共和国', '阿塞拜疆', '哈萨克斯坦', '印度', '巴基斯坦', '斯里兰卡', '缅甸', '黎巴嫩', '约旦', '叙利亚', '科威特', '沙特阿拉伯', '也门', '阿曼', '阿拉伯联合酋长国', '以色列', '巴林', '卡塔尔', '蒙古', '尼泊尔', '伊朗', '乌兹别克斯坦', '吉尔吉斯坦', '土库曼斯坦', '越南', '香港', '柬埔寨', '老挝', '中国', '台湾省', '孟加拉国', '马尔代夫', '马来西亚', '澳大利亚', '印度尼西亚', '菲律宾', '泰国', '新加坡', '文莱', '新西兰', '汤加', '斐济', '法属玻利尼西亚', '埃及', '阿尔及利亚', '摩洛哥', '突尼斯', '塞内加尔', '马里', '几内亚', '布基纳法索', '尼日尔', '多哥', '贝宁', '毛里求斯', '利比里亚', '加纳', '尼日利亚', '乍得', '喀麦隆', '加蓬', '刚果', '塞舌尔', '莫桑比克', '埃塞俄比亚', '索马里', '肯尼亚', '坦桑尼亚', '乌干达', '布隆迪', '马达加斯加', '津巴布韦', '阿森松', '开曼群岛', '科特迪瓦', '马里亚那群岛', '马提尼克', '纳米比亚', '荷属安的列斯', '留尼旺', '东萨摩亚(美)', '西萨摩亚', '马拉维', '莱索托', '博茨瓦纳', '斯威士兰', '南非', '萨尔瓦多', '秘鲁', '阿根廷', '巴西', '智利', '委内瑞拉', '玻利维亚', '巴拉圭', '苏里南'];
var arr = ['希腊.Cosmote(20201)', '希腊.Vodafone GR(20205)', '希腊.TELESTET(20210)', '希腊.TELE Greenland(29001)', '荷兰.Vodafone NL(20404)', '荷兰.KPN(20408)', '荷兰.O2 - NL(20412)', '荷兰.Ben(20416)', '荷兰.dutchtone(20420)', '比利时.Proximus(20601)', '比利时.Mobistar(20610)', '比利时.Orange(20620)', '法国.Orange(20801)', '法国.SFR(20810)', '法国.BOUYGTEL(20820)', '安道尔共和国.Mobiland(21303)', '西班牙.Vodafone E(21401)', '西班牙.MoviStar(21402)', '西班牙.AMENA(21403)', '西班牙.Xfera(21404)', '西班牙.MoviStar(21407)', '匈牙利.Pannon GSM(21601)', '匈牙利.Westel(21630)', '匈牙利.Vodafone(21670)', '南斯拉夫.MOBTEL(22001)', '南斯拉夫.ProMonte(22002)', '南斯拉夫.Telekom Srbija(22003)', '南斯拉夫.MONET(22004)', '意大利.TIM(22201)', '意大利.Vodafone IT(22210)', '意大利.WIND(22288)', '意大利.Blu SpA(22298)', '罗马尼亚.CONNEX(22601)', '罗马尼亚.Cosmorom(22603)', '罗马尼亚.dialog(22610)', '瑞士.Swiss GSM(22801)', '瑞士.sunrise(22802)', '瑞士.Orange(22803)', '捷克.PAEGAS(23001)', '捷克.EUROTEL(23002)', '捷克.OSKAR(23003)', '斯洛伐克.GLOBTEL(23101)', '斯洛伐克.EUROTEL(23102)', '奥地利.A1(23201)', '奥地利.T-Mobile(23203)', '奥地利.ONE(23205)', '奥地利.tele.ring(23207)', '英国.O2 - UK(23410)', '英国.Vodafone(23415)', '英国.T-Mobile UK(23430)', '英国.T-Mobile UK(23431)', '英国.T-Mobile UK(23432)', '英国.Orange(23433)', '英国.JT GSM(23450)', '英国.GUERNSEY TEL(23455)', '英国.MANX(23458)', '丹麦.TDK-MOBIL(23801)', '丹麦.SONOFON(23802)', '丹麦.Telia(23820)', '丹麦.Orange(23830)', '瑞典.Telia S(24001)', '瑞典.IQ(24007)', '瑞典.Vodafone(24008)', '挪威.TELENOR(24201)', '挪威.NetCom(24202)', '芬兰.Telia(24403)', '芬兰.RADIOLINJA(24405)', '芬兰.FINNET(24409)', '芬兰.2G(24412)', '芬兰.AMT(24414)', '芬兰.SONERA(24491)', '立陶宛.OMNITEL(24601)', '立陶宛.Bite GSM(24602)', '立陶宛.TELE2(24603)', '拉脱维亚.LMT GSM(24701)', '拉脱维亚.BALTCOM(24702)', '爱沙尼亚.EMT GSM(24801)', '爱沙尼亚.RLE(24802)', '爱沙尼亚.Q GSM(24803)', '俄罗斯.MTS(25001)', '俄罗斯.NorthWest GSM(25002)', '俄罗斯.NCC(25003)', '俄罗斯.SCS(25005)', '俄罗斯.SMARTS(25007)', '俄罗斯.DTC(25010)', '俄罗斯.Orensot(25011)', '俄罗斯.Far East(25012)', '俄罗斯.Kuban GSM(25013)', '俄罗斯.NTC(25016)', '俄罗斯.Ermak RMS(25017)', '俄罗斯.EXTEL(25028)', '俄罗斯.Uraltel(25039)', '俄罗斯.NC-GSM(25044)', '俄罗斯.Sonic Duo(25091)', '俄罗斯.Primtel(25092)', '俄罗斯.JSC Telecom XXI(25093)', '俄罗斯.Bee Line(25099)', '乌克兰.UMC(25501)', '乌克兰.WellCOM(25502)', '乌克兰.Kyivstar(25503)', '乌克兰.Golden Telecom(25505)', '白俄罗斯.VELCOM(25701)', '摩尔多瓦.VOXTEL(25901)', '摩尔多瓦.MOLDCELL(25902)', '波兰.Plus GSM(26001)', '波兰.Era GSM(26002)', '波兰.IDEA(26003)', '德国.T-Mobile(26201)', '德国.Vodafone D2(26202)', '德国.E-Plus(26203)', '德国.O2 - DE(26207)', '德国.Mobilcom(26213)', '直布罗陀.GIBTEL(26601)', '葡萄牙.Vodafone(26801)', '葡萄牙.OPTIMUS(26803)', '葡萄牙.TMN(26806)', '卢森堡.LUXGSM(27001)', '卢森堡.TANGO(27077)', '爱尔兰.Vodafone IRL(27201)', '爱尔兰.O2 - IRL(27202)', '爱尔兰.METEOR(27203)', '冰岛.SIMINN(27401)', '冰岛.TAL(27402)', '冰岛.Viking(27404)', '阿尔巴尼亚.AMC(27601)', '阿尔巴尼亚.Vodafone(27602)', '马耳他.Vodafone Malta(27801)', '马耳他.go mobile(27821)', '塞浦路斯.CYTAGSM(28001)', '格鲁吉亚.GEOCELL(28201)', '格鲁吉亚.Magti GSM(28202)', '格鲁吉亚.GEO 03(28203)', '亚美尼亚.ARMGSM(28301)', '保加利亚.M-TEL GSM(28401)', '土耳其.TURKCELL(28601)', '土耳其.TELSIM(28602)', '土耳其.ARIA(28603)', '土耳其.AYCELL(28604)', '斯洛文尼亚.SI.MOBIL(29340)', '斯洛文尼亚.MOBITEL(29341)', '列支敦士登.TELECOM(29501)', '列支敦士登.MONTEL(29502)', '列支敦士登.FL1(29505)', '列支敦士登.LI TANGO(29577)', '加拿大.Microcell(30237)', '加拿大.Rogers AT&T(30272)', '美国.Cellnet(31001)', '美国.Wireless 2000(31011)', '美国.Cingular(31015)', '美国.T-Mobile(31016)', '美国.Cingular(31017)', '美国.Cingular(31018)', '美国.T-Mobile(31020)', '美国.T-Mobile(31021)', '美国.T-Mobile(31022)', '美国.T-Mobile(31023)', '美国.T-Mobile(31024)', '美国.T-Mobile(31025)', '美国.T-Mobile(31026)', '美国.T-Mobile(31027)', '美国.T-Mobile(31031)', '美国.WestLink(31034)', '美国.Carolina(31035)', '美国.AT&T Wireless(31038)', '美国.Cingular(31041)', '美国.TMP Corp(31046)', '美国.T-Mobile(31058)', '美国.Epic Touch(31061)', '美国.AmeriLink(31063)', '美国.Einstein PCS(31064)', '美国.T-Mobile(31066)', '美国.Wireless 2000(31067)', '美国.NPI Wireless(31068)', '美国.Conestoga(31069)', '美国.Telemetrix(31074)', '美国.PTSI(31076)', '美国.Iowa Wireless(31077)', '美国.Airlink PCS(31078)', '美国.PinPoint(31079)', '美国.T-Mobile(31080)', '美国.AWS(31098)', '牙买加.Digicel(33805)', '安提瓜和巴布达.APUA PCS(34430)', '百慕大群岛.Telecom(35001)', '古巴.C_Com(36801)', '多米尼加共和国.Orange(37001)', '阿塞拜疆.AZERCELL GSM(40001)', '阿塞拜疆.BAKCELL GSM 2000(40002)', '哈萨克斯坦.K-MOBILE(40101)', "哈萨克斯坦.K'CELL(40102)", '印度.Hutch(40401)', '印度.Airtel(40402)', '印度.Airtel(40403)', '印度.IDEA(40404)', '印度.Hutch(40405)', '印度.IDEA(40407)', '印度.Reliance(40409)', '印度.Airtel(40410)', '印度.Hutch(40411)', '印度.IDEA(40412)', '印度.Hutch(40413)', '印度.Spice(40414)', '印度.Hutch(40415)', '印度.Airtel(40416)', '印度.Reliance(40418)', '印度.IDEA(40419)', '印度.Hutch(40420)', '印度.BPL Mobile(40421)', '印度.IDEA(40422)', '印度.IDEA(40424)', '印度.Hutch(40427)', '印度.Aircel(40429)', '印度.Hutch(40430)', '印度.Airtel(40431)', '印度.Cellone(40434)', '印度.Reliance(40436)', '印度.Aircel(40437)', '印度.Cellone(40438)', '印度.Airtel(40440)', '印度.RPG(40441)', '印度.Hutch(40443)', '印度.Spice(40444)', '印度.Airtel(40445)', '印度.Hutch(40446)', '印度.Airtel(40449)', '印度.Reliance(40450)', '印度.Cellone(40451)', '印度.Reliance(40452)', '印度.Cellone(40453)', '印度.Cellone(40454)', '印度.Cellone(40455)', '印度.IDEA(40456)', '印度.Cellone(40457)', '印度.Cellone(40458)', '印度.Cellone(40459)', '印度.Hutch(40460)', '印度.Cellone(40462)', '印度.Cellone(40464)', '印度.Cellone(40466)', '印度.Reliance(40467)', '印度.DOLPHIN(40468)', '印度.MTNL(40469)', '印度.Airtel(40470)', '印度.Cellone(40471)', '印度.Cellone(40472)', '印度.Cellone(40473)', '印度.Cellone(40474)', '印度.Cellone(40475)', '印度.Cellone(40476)', '印度.Cellone(40477)', '印度.IDEA(40478)', '印度.Cellone(40479)', '印度.Cellone(40480)', '印度.Cellone(40481)', '印度.IDEA(40482)', '印度.Reliance(40483)', '印度.Hutch(40484)', '印度.Reliance(40485)', '印度.Hutch(40486)', '印度.IDEA(40487)', '印度.Hutch(40488)', '印度.IDEA(40489)', '印度.Airtel(40490)', '印度.Airtel(40492)', '印度.Airtel(40493)', '印度.Airtel(40494)', '印度.Airtel(40495)', '印度.Airtel(40496)', '印度.Airtel(40497)', '印度.Airtel(40498)', '印度.Airtel(40551)', '印度.Airtel(40552)', '印度.Airtel(40553)', '印度.Airtel(40554)', '印度.Airtel(40555)', '印度.Airtel(40556)', '印度.Hutch(40566)', '印度.Hutch(40567)', '巴基斯坦.Mobilink(41001)', '斯里兰卡.DIALOG(41302)', '斯里兰卡.CELLTEL(41303)', '缅甸.MM 900(41401)', '黎巴嫩.Cellis(41501)', '黎巴嫩.LibanCell(41503)', '约旦.Fastlink(41601)', '约旦.MobileCom(41677)', '叙利亚.Spacetel(41702)', '叙利亚.MOBILE SYRIA(41709)', '科威特.MTCNet(41902)', '科威特.WATANIYA(41903)', '沙特阿拉伯.Al-Jawal(42001)', '沙特阿拉伯.EAE(42007)', '也门.Spacetel(42102)', '阿曼.OMAN MOBILE(42202)', '阿拉伯联合酋长国.ETISALAT(42402)', '以色列.Orange(42501)', '以色列.JAWWAL(42505)', '巴林.MOBILE PLUS(42601)', '卡塔尔.QATARNET(42701)', '蒙古.MobiCom(42899)', '尼泊尔.NTC(42901)', '伊朗.TCI(43211)', '伊朗.KISH(43214)', '乌兹别克斯坦.Buztel(43401)', '乌兹别克斯坦.Uzmacom(43402)', '乌兹别克斯坦.UZB DAEWOO-GSM(43404)', '乌兹别克斯坦.Coscom(43405)', '吉尔吉斯坦.BITEL(43701)', '土库曼斯坦.BCTI(43801)', '越南.MOBIFONE(45201)', '越南.VINAFONE(45202)', '香港.CSL(45400)', '香港.NEW WORLD(45401)', '香港.CSL(45402)', '香港.Orange(45404)', '香港.SMC(45406)', '香港.NEW WORLD(45410)', '香港.PEOPLES(45412)', '香港.SUNDAY(45416)', '香港.HK TELECOM(45418)', '柬埔寨.MobiTel(45601)', '柬埔寨.SAMART-GSM(45602)', '老挝.LAO GSM(45701)', '中国.CHINA MOBILE(46000)', '中国.CHN-CUGSM(46001)', '中国.CHINA MOBILE(46002)', '中国.CHINA TELECOM(46003)', '台湾省.Far EasTone(46601)', '台湾省.TUNTEX(46606)', '台湾省.ACeS(46668)', '台湾省.KGT(46688)', '台湾省.Chunghwa(46692)', '台湾省.MobiTai(46693)', '台湾省.TWN GSM(46697)', '台湾省.TransAsia(46699)', '孟加拉国.GrameemPhone(47001)', '孟加拉国.AKTEL(47002)', '孟加拉国.ShebaWorld(47003)', '孟加拉国.Mobile 2000(47019)', '马尔代夫.DHIMOBILE(47201)', '马来西亚.Maxis Mobile(50212)', '马来西亚.TM Touch(50213)', '马来西亚.DiGi(50216)', '马来西亚.ADAM(50217)', '马来西亚.CELCOM(50219)', '澳大利亚.MobileNet(50501)', '澳大利亚.OPTUS(50502)', '澳大利亚.Vodafone(50503)', '澳大利亚.One.Tel(50508)', '印度尼西亚.ACeS(51000)', '印度尼西亚.SATELINDOCEL(51001)', '印度尼西亚.LIPPO TEL(51008)', '印度尼西亚.TELKOMSEL(51010)', '印度尼西亚.GSM-XL(51011)', '印度尼西亚.INDOSAT(51021)', '菲律宾.ISLACOM(51501)', '菲律宾.Globe(51502)', '菲律宾.SMART(51503)', '菲律宾.Digitel(51505)', '菲律宾.ACeS(51511)', '泰国.AIS GSM(52001)', '泰国.ACT Mobile(52015)', '泰国.WP-1800(52018)', '泰国.ACeS(52020)', '泰国.HELLO(52023)', '泰国.Orange(52099)', '新加坡.ST-GSM-SGP(52501)', '新加坡.ST-GSM1800-SGP(52502)', '新加坡.M1-GSM-SGP(52503)', '新加坡.SGP-M1-3GSM(52504)', '新加坡.STARHUB-SGP(52505)', '文莱.BRU TSTCom(52811)', '新西兰.Vodafone(53001)', '汤加.Tonga Comm.(53901)', '斐济.Vodafone(54201)', '法属玻利尼西亚.VINI(54720)', '埃及.MobiNiL(60201)', '埃及.CLICK GSM(60202)', '阿尔及利亚.AMN(60301)', '摩洛哥.Meditel(60400)', '摩洛哥.IAM(60401)', '突尼斯.TUNICELL(60502)', '塞内加尔.ALIZE(60801)', '塞内加尔.SENTEL(60802)', '马里.MALITEL(61001)', '几内亚.MOBILIS(61101)', '几内亚.LAGUI(61102)', '布基纳法索.CELTEL(61302)', '尼日尔.CELTEL(61402)', '多哥.TOGOCEL(61501)', '贝宁.LIBERCOM(61601)', '贝宁.Telecel Benin(61602)', '贝宁.BENINCELL(61603)', '毛里求斯.CELLPLUS(61701)', '毛里求斯.EMTEL(61710)', '利比里亚.Omega(61801)', '加纳.SPACEFON(62001)', '加纳.ONEtouch(62002)', '加纳.MOBITEL(62003)', '尼日利亚.MTN(62100)', '尼日利亚.ECONET(62120)', '尼日利亚.MTN(62130)', '尼日利亚.NITEL GSM(62140)', '乍得.CELTEL(62201)', '乍得.LIBERTIS(62202)', '喀麦隆.MTN-CAM(62401)', '喀麦隆.MOBILIS(62402)', '加蓬.LIBERTIS(62801)', '加蓬.GO Celtel(62802)', '加蓬.CELTEL(62803)', '刚果.CELTEL(62901)', '刚果.LIBERTIS(62910)', '塞舌尔.SEYCEL(63301)', '塞舌尔.AIRTEL(63310)', '莫桑比克.MobiTel(63401)', '埃塞俄比亚.ETMTN(63601)', '索马里.BARAKAAT(63701)', '肯尼亚.Safaricom(63902)', '肯尼亚.KENCELL(63903)', '坦桑尼亚.TRITEL(64001)', '坦桑尼亚.MobiTel(64002)', '坦桑尼亚.ZANTEL(64003)', '坦桑尼亚.Vodacom(64004)', '坦桑尼亚.CELTEL(64005)', '乌干达.CelTel(64101)', '乌干达.MTN-UGANDA(64110)', '乌干达.UTL TELECEL(64111)', '布隆迪.Spacetel(64201)', '布隆迪.SAFARIS(64202)', '马达加斯加.Madacom(64601)', '马达加斯加.ANTARIS(64602)', '津巴布韦.NET*ONE(64801)', '津巴布韦.TELECEL(64803)', '津巴布韦.ECONET(64804)', '阿森松.MTC(64901)', '开曼群岛.MTC(64901)', '科特迪瓦.MTC(64901)', '马里亚那群岛.MTC(64901)', '马提尼克.MTC(64901)', '纳米比亚.MTC(64901)', '荷属安的列斯.MTC(64901)', '留尼旺.MTC(64901)', '东萨摩亚(美).MTC(64901)', '西萨摩亚.MTC(64901)', '马拉维.CALLPOINT 90(65001)', '马拉维.CelTel(65010)', '莱索托.Vodacom(65101)', '博茨瓦纳.MASCOM(65201)', '博茨瓦纳.VISTA(65202)', '斯威士兰.SwaziMTN(65310)', '南非.Vodacom(65501)', '南非.Cell C (Pty) Ltd(65507)', '南非.MTN(65510)', '萨尔瓦多.PERSONAL(70601)', '萨尔瓦多.DIGICEL(70602)', '秘鲁.TIM(71610)', '阿根廷.UNIFON(72207)', '阿根廷.Telecom Personal(72234)', '阿根廷.PORT-HABLE(72235)', '巴西.TIM BRASIL(72402)', '巴西.TIM BRASIL(72403)', '巴西.TIM BRASIL(72404)', '巴西.Claro(72405)', '巴西.BrTCel(72416)', '智利.ENTEL PCS(73001)', '智利.ENTEL PCS(73010)', '委内瑞拉.INFONET(73401)', '委内瑞拉.DIGITEL(73402)', '玻利维亚.NUEVATEL(73601)', '玻利维亚.ENTEL(73602)', '巴拉圭.VOX(74401)', '巴拉圭.PY 02(74402)', '苏里南.ICMS(74601)']
var search = document.getElementsByClassName("blue-input")[0];
var selectedId = document.getElementById("selectedId")

function showList(){
    var res = searchByIndexOf(search.value,arr);
    for(var i=0;i<res.length;i++){
        var li = document.createElement("li");
        li.innerHTML = res[i];
        document.getElementById("drop").appendChild(li);
    }
}

search.oninput = function getMoreContents() {

    //删除ul
    var drop = document.getElementById("drop");
    selectedId.removeChild(drop);
    //把ul添加回来
    var originalUl = document.createElement("ul");
    originalUl.id = "drop";
    selectedId.appendChild(originalUl);

    showList();
}

// 添加获取焦点事件
search.onfocus = function(){
    // 初始下拉列表
    var originalUl = document.createElement("ul");
    originalUl.id = "drop";
    selectedId.appendChild(originalUl);
    showList();
}

//添加失去焦点事件
search.onblur = function(){
//	console.log("soutsout")
    var drop = document.getElementById("drop");
    selectedId.removeChild(drop);
}

// 添加点击事件--点击查询定位数据
search.onclick = function (){
    // 点击搜索按钮，定位数据
}


//模糊查询:利用字符串的indexOf方法
function searchByIndexOf(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    if(keyWord == ""){
        return [];
    }else{
        var len = list.length;
        var arr = [];
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(list[i].indexOf(keyWord)>=0){
                arr.push(list[i]);
            }
        }
        return arr;
    }

}

//正则匹配
/*function searchByRegExp(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    var len = list.length;
    var arr = [];
    var reg = new RegExp(keyWord);
    for(var i=0;i<len;i++){
        //如果字符串中不包含目标字符会返回-1
        if(list[i].match(reg)){
            arr.push(list[i]);
        }
    }
    return arr;
}*/