import { Divider, Typography } from '@mui/material';

import Laws from '../Laws';

import Callout from '../../Components/Callout';
import IDLink from '../../Components/IDLink';

import routeTo from '../routeTo';

export default function Content() {
    return (
        <Laws>
            <Typography variant='h2'>销售服务、无形资产、不动产注释</Typography>
            <Callout type='info'>
                <Typography variant='body2'>财税〔2016〕36号</Typography>
            </Callout>
            <Callout type='info'>
                <Typography variant='body2'>《国家税务总局关于全面推开营业税改征增值税试点的通知》</Typography>
                <Typography variant='body2'>附件1《营业税改征增值税试点实施办法》</Typography>
                <Typography variant='body2'>附《销售服务、无形资产、不动产注释》</Typography>
            </Callout>
            <Divider />
            <Typography variant='h3'>目录</Typography>
            <Callout>
                <Typography><IDLink onClick={routeTo('680C298B')}>一、销售服务</IDLink></Typography>
                <Callout>
                    <Typography><IDLink onClick={routeTo('494317FF')}>(一)交通运输服务</IDLink></Typography>
                    <Typography><IDLink onClick={routeTo('3944F9EF')}>(二)邮政服务</IDLink></Typography>
                    <Typography><IDLink onClick={routeTo('95203379')}>(三)电信服务</IDLink></Typography>
                    <Typography><IDLink onClick={routeTo('5D02CDD9')}>(四)建筑服务</IDLink></Typography>
                    <Typography><IDLink onClick={routeTo('66C31DEC')}>(五)金融服务</IDLink></Typography>
                    <Typography><IDLink onClick={routeTo('CB78C0B3')}>(六)现代服务</IDLink></Typography>
                    <Typography><IDLink onClick={routeTo('201BC799')}>(七)生活服务</IDLink></Typography>
                </Callout>
                <Typography><IDLink onClick={routeTo('025EDCF2')}>二、销售无形资产</IDLink></Typography>
                <Typography><IDLink onClick={routeTo('8CD65321')}>三、销售不动产</IDLink></Typography>
            </Callout>
            <Divider />
            <Typography variant='h3'>正文</Typography>
            <Callout>
                <Typography id='680C298B' variant='title4'>一、销售服务</Typography>
                <Typography variant='content2'>销售服务，是指提供交通运输服务、邮政服务、电信服务、建筑服务、金融服务、现代服务、生活服务。</Typography>
                <Typography id='494317FF' variant='title5'>(一)交通运输服务。</Typography>
                <Typography variant='content2'>交通运输服务，是指利用运输工具将货物或者旅客送达目的地，使其空间位置得到转移的业务活动。包括陆路运输服务、水路运输服务、航空运输服务和管道运输服务。</Typography>
                <Typography variant='content1'>1.陆路运输服务。</Typography>
                <Typography variant='content2'>陆路运输服务，是指通过陆路(地上或者地下)运送货物或者旅客的运输业务活动，包括铁路运输服务和其他陆路运输服务。</Typography>
                <Typography variant='content2'>(1)铁路运输服务，是指通过铁路运送货物或者旅客的运输业务活动。</Typography>
                <Typography variant='content2'>(2)其他陆路运输服务，是指铁路运输以外的陆路运输业务活动。包括公路运输、缆车运输、索道运输、地铁运输、城市轻轨运输等。</Typography>
                <Typography variant='content2'>出租车公司向使用本公司自有出租车的出租车司机收取的管理费用，按照陆路运输服务缴纳增值税。</Typography>
                <Typography variant='content1'>2.水路运输服务。</Typography>
                <Typography variant='content2'>水路运输服务，是指通过江、河、湖、川等天然、人工水道或者海洋航道运送货物或者旅客的运输业务活动。</Typography>
                <Typography variant='content2'>水路运输的程租、期租业务，属于水路运输服务。</Typography>
                <Typography variant='content2'>程租业务，是指运输企业为租船人完成某一特定航次的运输任务并收取租赁费的业务。</Typography>
                <Typography variant='content2'>期租业务，是指运输企业将配备有操作人员的船舶承租给他人使用一定期限，承租期内听候承租方调遣，不论是否经营，均按天向承租方收取租赁费，发生的固定费用均由船东负担的业务。</Typography>
                <Typography variant='content1'>3.航空运输服务。</Typography>
                <Typography variant='content2'>航空运输服务，是指通过空中航线运送货物或者旅客的运输业务活动。</Typography>
                <Typography variant='content2'>航空运输的湿租业务，属于航空运输服务。</Typography>
                <Typography variant='content2'>湿租业务，是指航空运输企业将配备有机组人员的飞机承租给他人使用一定期限，承租期内听候承租方调遣，不论是否经营，均按一定标准向承租方收取租赁费，发生的固定费用均由承租方承担的业务。</Typography>
                <Typography variant='content2'>航天运输服务，按照航空运输服务缴纳增值税。</Typography>
                <Typography variant='content2'>航天运输服务，是指利用火箭等载体将卫星、空间探测器等空间飞行器发射到空间轨道的业务活动。</Typography>
                <Typography variant='content1'>4.管道运输服务。</Typography>
                <Typography variant='content2'>管道运输服务，是指通过管道设施输送气体、液体、固体物质的运输业务活动。</Typography>
                <Typography variant='content2'>无运输工具承运业务，按照交通运输服务缴纳增值税。</Typography>
                <Typography variant='content2'>无运输工具承运业务，是指经营者以承运人身份与托运人签订运输服务合同，收取运费并承担承运人责任，然后委托实际承运人完成运输服务的经营活动。</Typography>
                <Typography id='3944F9EF' variant='title5'>(二)邮政服务。</Typography>
                <Typography variant='content2'>邮政服务，是指中国邮政集团公司及其所属邮政企业提供邮件寄递、邮政汇兑和机要通信等邮政基本服务的业务活动。包括邮政普遍服务、邮政特殊服务和其他邮政服务。</Typography>
                <Typography variant='content1'>1.邮政普遍服务。</Typography>
                <Typography variant='content2'>邮政普遍服务，是指函件、包裹等邮件寄递，以及邮票发行、报刊发行和邮政汇兑等业务活动。</Typography>
                <Typography variant='content2'>函件，是指信函、印刷品、邮资封片卡、无名址函件和邮政小包等。</Typography>
                <Typography variant='content2'>包裹，是指按照封装上的名址递送给特定个人或者单位的独立封装的物品，其重量不超过五十千克，任何一边的尺寸不超过一百五十厘米，长、宽、高合计不超过三百厘米。</Typography>
                <Typography variant='content1'>2.邮政特殊服务。</Typography>
                <Typography variant='content2'>邮政特殊服务，是指义务兵平常信函、机要通信、盲人读物和革命烈士遗物的寄递等业务活动。</Typography>
                <Typography variant='content1'>3.其他邮政服务。</Typography>
                <Typography variant='content2'>其他邮政服务，是指邮册等邮品销售、邮政代理等业务活动。</Typography>
                <Typography id='95203379' variant='title5'>(三)电信服务。</Typography>
                <Typography variant='content2'>电信服务，是指利用有线、无线的电磁系统或者光电系统等各种通信网络资源，提供语音通话服务，传送、发射、接收或者应用图像、短信等电子数据和信息的业务活动。包括基础电信服务和增值电信服务。</Typography>
                <Typography variant='content1'>1.基础电信服务。</Typography>
                <Typography variant='content2'>基础电信服务，是指利用固网、移动网、卫星、互联网，提供语音通话服务的业务活动，以及出租或者出售带宽、波长等网络元素的业务活动。</Typography>
                <Typography variant='content1'>2.增值电信服务。</Typography>
                <Typography variant='content2'>增值电信服务，是指利用固网、移动网、卫星、互联网、有线电视网络，提供短信和彩信服务、电子数据和信息的传输及应用服务、互联网接入服务等业务活动。</Typography>
                <Typography variant='content2'>卫星电视信号落地转接服务，按照增值电信服务缴纳增值税。</Typography>
                <Typography id='5D02CDD9' variant='title5'>(四)建筑服务。</Typography>
                <Typography variant='content2'>建筑服务，是指各类建筑物、构筑物及其附属设施的建造、修缮、装饰，线路、管道、设备、设施等的安装以及其他工程作业的业务活动。包括工程服务、安装服务、修缮服务、装饰服务和其他建筑服务。</Typography>
                <Typography variant='content1'>1.工程服务。</Typography>
                <Typography variant='content2'>工程服务，是指新建、改建各种建筑物、构筑物的工程作业，包括与建筑物相连的各种设备或者支柱、操作平台的安装或者装设工程作业，以及各种窑炉和金属结构工程作业。</Typography>
                <Typography variant='content1'>2.安装服务。</Typography>
                <Typography variant='content2'>安装服务，是指生产设备、动力设备、起重设备、运输设备、传动设备、医疗实验设备以及其他各种设备、设施的装配、安置工程作业，包括与被安装设备相连的工作台、梯子、栏杆的装设工程作业，以及被安装设备的绝缘、防腐、保温、油漆等工程作业。</Typography>
                <Typography variant='content2'>固定电话、有线电视、宽带、水、电、燃气、暖气等经营者向用户收取的安装费、初装费、开户费、扩容费以及类似收费，按照安装服务缴纳增值税。</Typography>
                <Typography variant='content1'>3.修缮服务。</Typography>
                <Typography variant='content2'>修缮服务，是指对建筑物、构筑物进行修补、加固、养护、改善，使之恢复原来的使用价值或者延长其使用期限的工程作业。</Typography>
                <Typography variant='content1'>4.装饰服务。</Typography>
                <Typography variant='content2'>装饰服务，是指对建筑物、构筑物进行修饰装修，使之美观或者具有特定用途的工程作业。</Typography>
                <Typography variant='content1'>5.其他建筑服务。</Typography>
                <Typography variant='content2'>其他建筑服务，是指上列工程作业之外的各种工程作业服务，如钻井(打井)、拆除建筑物或者构筑物、平整土地、园林绿化、疏浚(不包括航道疏浚)、建筑物平移、搭脚手架、爆破、矿山穿孔、表面附着物(包括岩层、土层、沙层等)剥离和清理等工程作业。</Typography>
                <Typography id='66C31DEC' variant='title5'>(五)金融服务。</Typography>
                <Typography variant='content2'>金融服务，是指经营金融保险的业务活动。包括贷款服务、直接收费金融服务、保险服务和金融商品转让。</Typography>
                <Typography variant='content1'>1.贷款服务。</Typography>
                <Typography variant='content2'>贷款，是指将资金贷与他人使用而取得利息收入的业务活动。</Typography>
                <Typography variant='content2'>各种占用、拆借资金取得的收入，包括金融商品持有期间(含到期)利息(保本收益、报酬、资金占用费、补偿金等)收入、信用卡透支利息收入、买入返售金融商品利息收入、融资融券收取的利息收入，以及融资性售后回租、押汇、罚息、票据贴现、转贷等业务取得的利息及利息性质的收入，按照贷款服务缴纳增值税。</Typography>
                <Typography variant='content2'>融资性售后回租，是指承租方以融资为目的，将资产出售给从事融资性售后回租业务的企业后，从事融资性售后回租业务的企业将该资产出租给承租方的业务活动。</Typography>
                <Typography variant='content2'>以货币资金投资收取的固定利润或者保底利润，按照贷款服务缴纳增值税。</Typography>
                <Typography variant='content1'>2.直接收费金融服务。</Typography>
                <Typography variant='content2'>直接收费金融服务，是指为货币资金融通及其他金融业务提供相关服务并且收取费用的业务活动。包括提供货币兑换、账户管理、电子银行、信用卡、信用证、财务担保、资产管理、信托管理、基金管理、金融交易场所(平台)管理、资金结算、资金清算、金融支付等服务。</Typography>
                <Typography variant='content1'>3.保险服务。</Typography>
                <Typography variant='content2'>保险服务，是指投保人根据合同约定，向保险人支付保险费，保险人对于合同约定的可能发生的事故因其发生所造成的财产损失承担赔偿保险金责任，或者当被保险人死亡、伤残、疾病或者达到合同约定的年龄、期限等条件时承担给付保险金责任的商业保险行为。包括人身保险服务和财产保险服务。</Typography>
                <Typography variant='content2'>人身保险服务，是指以人的寿命和身体为保险标的的保险业务活动。</Typography>
                <Typography variant='content2'>财产保险服务，是指以财产及其有关利益为保险标的的保险业务活动。</Typography>
                <Typography variant='content1'>4.金融商品转让。</Typography>
                <Typography variant='content2'>金融商品转让，是指转让外汇、有价证券、非货物期货和其他金融商品所有权的业务活动。</Typography>
                <Typography variant='content2'>其他金融商品转让包括基金、信托、理财产品等各类资产管理产品和各种金融衍生品的转让。</Typography>
                <Typography id='CB78C0B3' variant='title5'>(六)现代服务。</Typography>
                <Typography variant='content2'>现代服务，是指围绕制造业、文化产业、现代物流产业等提供技术性、知识性服务的业务活动。包括研发和技术服务、信息技术服务、文化创意服务、物流辅助服务、租赁服务、鉴证咨询服务、广播影视服务、商务辅助服务和其他现代服务。</Typography>
                <Typography variant='content1'>1.研发和技术服务。</Typography>
                <Typography variant='content2'>研发和技术服务，包括研发服务、合同能源管理服务、工程勘察勘探服务、专业技术服务。</Typography>
                <Typography variant='content2'>(1)研发服务，也称技术开发服务，是指就新技术、新产品、新工艺或者新材料及其系统进行研究与试验开发的业务活动。</Typography>
                <Typography variant='content2'>(2)合同能源管理服务，是指节能服务公司与用能单位以契约形式约定节能目标，节能服务公司提供必要的服务，用能单位以节能效果支付节能服务公司投入及其合理报酬的业务活动。</Typography>
                <Typography variant='content2'>(3)工程勘察勘探服务，是指在采矿、工程施工前后，对地形、地质构造、地下资源蕴藏情况进行实地调查的业务活动。</Typography>
                <Typography variant='content2'>(4)专业技术服务，是指气象服务、地震服务、海洋服务、测绘服务、城市规划、环境与生态监测服务等专项技术服务。</Typography>
                <Typography variant='content1'>2.信息技术服务。</Typography>
                <Typography variant='content2'>信息技术服务，是指利用计算机、通信网络等技术对信息进行生产、收集、处理、加工、存储、运输、检索和利用，并提供信息服务的业务活动。包括软件服务、电路设计及测试服务、信息系统服务、业务流程管理服务和信息系统增值服务。</Typography>
                <Typography variant='content2'>(1)软件服务，是指提供软件开发服务、软件维护服务、软件测试服务的业务活动。</Typography>
                <Typography variant='content2'>(2)电路设计及测试服务，是指提供集成电路和电子电路产品设计、测试及相关技术支持服务的业务活动。</Typography>
                <Typography variant='content2'>(3)信息系统服务，是指提供信息系统集成、网络管理、网站内容维护、桌面管理与维护、信息系统应用、基础信息技术管理平台整合、信息技术基础设施管理、数据中心、托管中心、信息安全服务、在线杀毒、虚拟主机等业务活动。包括网站对非自有的网络游戏提供的网络运营服务。</Typography>
                <Typography variant='content2'>(4)业务流程管理服务，是指依托信息技术提供的人力资源管理、财务经济管理、审计管理、税务管理、物流信息管理、经营信息管理和呼叫中心等服务的活动。</Typography>
                <Typography variant='content2'>(5)信息系统增值服务，是指利用信息系统资源为用户附加提供的信息技术服务。包括数据处理、分析和整合、数据库管理、数据备份、数据存储、容灾服务、电子商务平台等。</Typography>
                <Typography variant='content1'>3.文化创意服务。</Typography>
                <Typography variant='content2'>文化创意服务，包括设计服务、知识产权服务、广告服务和会议展览服务。</Typography>
                <Typography variant='content2'>(1)设计服务，是指把计划、规划、设想通过文字、语言、图画、声音、视觉等形式传递出来的业务活动。包括工业设计、内部管理设计、业务运作设计、供应链设计、造型设计、服装设计、环境设计、平面设计、包装设计、动漫设计、网游设计、展示设计、网站设计、机械设计、工程设计、广告设计、创意策划、文印晒图等。</Typography>
                <Typography variant='content2'>(2)知识产权服务，是指处理知识产权事务的业务活动。包括对专利、商标、著作权、软件、集成电路布图设计的登记、鉴定、评估、认证、检索服务。</Typography>
                <Typography variant='content2'>(3)广告服务，是指利用图书、报纸、杂志、广播、电视、电影、幻灯、路牌、招贴、橱窗、霓虹灯、灯箱、互联网等各种形式为客户的商品、经营服务项目、文体节目或者通告、声明等委托事项进行宣传和提供相关服务的业务活动。包括广告代理和广告的发布、播映、宣传、展示等。</Typography>
                <Typography variant='content2'>(4)会议展览服务，是指为商品流通、促销、展示、经贸洽谈、民间交流、企业沟通、国际往来等举办或者组织安排的各类展览和会议的业务活动。</Typography>
                <Typography variant='content1'>4.物流辅助服务。</Typography>
                <Typography variant='content2'>物流辅助服务，包括航空服务、港口码头服务、货运客运场站服务、打捞救助服务、装卸搬运服务、仓储服务和收派服务。</Typography>
                <Typography variant='content2'>(1)航空服务，包括航空地面服务和通用航空服务。</Typography>
                <Typography variant='content2'>航空地面服务，是指航空公司、飞机场、民航管理局、航站等向在境内航行或者在境内机场停留的境内外飞机或者其他飞行器提供的导航等劳务性地面服务的业务活动。包括旅客安全检查服务、停机坪管理服务、机场候机厅管理服务、飞机清洗消毒服务、空中飞行管理服务、飞机起降服务、飞行通讯服务、地面信号服务、飞机安全服务、飞机跑道管理服务、空中交通管理服务等。</Typography>
                <Typography variant='content2'>通用航空服务，是指为专业工作提供飞行服务的业务活动，包括航空摄影、航空培训、航空测量、航空勘探、航空护林、航空吊挂播洒、航空降雨、航空气象探测、航空海洋监测、航空科学实验等。</Typography>
                <Typography variant='content2'>(2)港口码头服务，是指港务船舶调度服务、船舶通讯服务、航道管理服务、航道疏浚服务、灯塔管理服务、航标管理服务、船舶引航服务、理货服务、系解缆服务、停泊和移泊服务、海上船舶溢油清除服务、水上交通管理服务、船只专业清洗消毒检测服务和防止船只漏油服务等为船只提供服务的业务活动。</Typography>
                <Typography variant='content2'>港口设施经营人收取的港口设施保安费按照港口码头服务缴纳增值税。</Typography>
                <Typography variant='content2'>(3)货运客运场站服务，是指货运客运场站提供货物配载服务、运输组织服务、中转换乘服务、车辆调度服务、票务服务、货物打包整理、铁路线路使用服务、加挂铁路客车服务、铁路行包专列发送服务、铁路到达和中转服务、铁路车辆编解服务、车辆挂运服务、铁路接触网服务、铁路机车牵引服务等业务活动。</Typography>
                <Typography variant='content2'>(4)打捞救助服务，是指提供船舶人员救助、船舶财产救助、水上救助和沉船沉物打捞服务的业务活动。</Typography>
                <Typography variant='content2'>(5)装卸搬运服务，是指使用装卸搬运工具或者人力、畜力将货物在运输工具之间、装卸现场之间或者运输工具与装卸现场之间进行装卸和搬运的业务活动。</Typography>
                <Typography variant='content2'>(6)仓储服务，是指利用仓库、货场或者其他场所代客贮放、保管货物的业务活动。</Typography>
                <Typography variant='content2'>(7)收派服务，是指接受寄件人委托，在承诺的时限内完成函件和包裹的收件、分拣、派送服务的业务活动。</Typography>
                <Typography variant='content2'>收件服务，是指从寄件人收取函件和包裹，并运送到服务提供方同城的集散中心的业务活动。</Typography>
                <Typography variant='content2'>分拣服务，是指服务提供方在其集散中心对函件和包裹进行归类、分发的业务活动。</Typography>
                <Typography variant='content2'>派送服务，是指服务提供方从其集散中心将函件和包裹送达同城的收件人的业务活动。</Typography>
                <Typography variant='content1'>5.租赁服务。</Typography>
                <Typography variant='content2'>租赁服务，包括融资租赁服务和经营租赁服务。</Typography>
                <Typography variant='content2'>(1)融资租赁服务，是指具有融资性质和所有权转移特点的租赁活动。即出租人根据承租人所要求的规格、型号、性能等条件购入有形动产或者不动产租赁给承租人，合同期内租赁物所有权属于出租人，承租人只拥有使用权，合同期满付清租金后，承租人有权按照残值购入租赁物，以拥有其所有权。不论出租人是否将租赁物销售给承租人，均属于融资租赁。</Typography>
                <Typography variant='content2'>按照标的物的不同，融资租赁服务可分为有形动产融资租赁服务和不动产融资租赁服务。</Typography>
                <Typography variant='content2'>融资性售后回租不按照本税目缴纳增值税。</Typography>
                <Typography variant='content2'>(2)经营租赁服务，是指在约定时间内将有形动产或者不动产转让他人使用且租赁物所有权不变更的业务活动。</Typography>
                <Typography variant='content2'>按照标的物的不同，经营租赁服务可分为有形动产经营租赁服务和不动产经营租赁服务。</Typography>
                <Typography variant='content2'>将建筑物、构筑物等不动产或者飞机、车辆等有形动产的广告位出租给其他单位或者个人用于发布广告，按照经营租赁服务缴纳增值税。</Typography>
                <Typography variant='content2'>车辆停放服务、道路通行服务(包括过路费、过桥费、过闸费等)等按照不动产经营租赁服务缴纳增值税。</Typography>
                <Typography variant='content2'>水路运输的光租业务、航空运输的干租业务，属于经营租赁。</Typography>
                <Typography variant='content2'>光租业务，是指运输企业将船舶在约定的时间内出租给他人使用，不配备操作人员，不承担运输过程中发生的各项费用，只收取固定租赁费的业务活动。</Typography>
                <Typography variant='content2'>干租业务，是指航空运输企业将飞机在约定的时间内出租给他人使用，不配备机组人员，不承担运输过程中发生的各项费用，只收取固定租赁费的业务活动。</Typography>
                <Typography variant='content1'>6.鉴证咨询服务。</Typography>
                <Typography variant='content2'>鉴证咨询服务，包括认证服务、鉴证服务和咨询服务。</Typography>
                <Typography variant='content2'>(1)认证服务，是指具有专业资质的单位利用检测、检验、计量等技术，证明产品、服务、管理体系符合相关技术规范、相关技术规范的强制性要求或者标准的业务活动。</Typography>
                <Typography variant='content2'>(2)鉴证服务，是指具有专业资质的单位受托对相关事项进行鉴证，发表具有证明力的意见的业务活动。包括会计鉴证、税务鉴证、法律鉴证、职业技能鉴定、工程造价鉴证、工程监理、资产评估、环境评估、房地产土地评估、建筑图纸审核、医疗事故鉴定等。</Typography>
                <Typography variant='content2'>(3)咨询服务，是指提供信息、建议、策划、顾问等服务的活动。包括金融、软件、技术、财务、税收、法律、内部管理、业务运作、流程管理、健康等方面的咨询。</Typography>
                <Typography variant='content2'>翻译服务和市场调查服务按照咨询服务缴纳增值税。</Typography>
                <Typography variant='content1'>7.广播影视服务。</Typography>
                <Typography variant='content2'>广播影视服务，包括广播影视节目(作品)的制作服务、发行服务和播映(含放映，下同)服务。</Typography>
                <Typography variant='content2'>(1)广播影视节目(作品)制作服务，是指进行专题(特别节目)、专栏、综艺、体育、动画片、广播剧、电视剧、电影等广播影视节目和作品制作的服务。具体包括与广播影视节目和作品相关的策划、采编、拍摄、录音、音视频文字图片素材制作、场景布置、后期的剪辑、翻译(编译)、字幕制作、片头、片尾、片花制作、特效制作、影片修复、编目和确权等业务活动。</Typography>
                <Typography variant='content2'>(2)广播影视节目(作品)发行服务，是指以分账、买断、委托等方式，向影院、电台、电视台、网站等单位和个人发行广播影视节目(作品)以及转让体育赛事等活动的报道及播映权的业务活动。</Typography>
                <Typography variant='content2'>(3)广播影视节目(作品)播映服务，是指在影院、剧院、录像厅及其他场所播映广播影视节目(作品)，以及通过电台、电视台、卫星通信、互联网、有线电视等无线或者有线装置播映广播影视节目(作品)的业务活动。</Typography>
                <Typography variant='content1'>8.商务辅助服务。</Typography>
                <Typography variant='content2'>商务辅助服务，包括企业管理服务、经纪代理服务、人力资源服务、安全保护服务。</Typography>
                <Typography variant='content2'>(1)企业管理服务，是指提供总部管理、投资与资产管理、市场管理、物业管理、日常综合管理等服务的业务活动。</Typography>
                <Typography variant='content2'>(2)经纪代理服务，是指各类经纪、中介、代理服务。包括金融代理、知识产权代理、货物运输代理、代理报关、法律代理、房地产中介、职业中介、婚姻中介、代理记账、拍卖等。</Typography>
                <Typography variant='content2'>货物运输代理服务，是指接受货物收货人、发货人、船舶所有人、船舶承租人或者船舶经营人的委托，以委托人的名义，为委托人办理货物运输、装卸、仓储和船舶进出港口、引航、靠泊等相关手续的业务活动。</Typography>
                <Typography variant='content2'>代理报关服务，是指接受进出口货物的收、发货人委托，代为办理报关手续的业务活动。</Typography>
                <Typography variant='content2'>(3)人力资源服务，是指提供公共就业、劳务派遣、人才委托招聘、劳动力外包等服务的业务活动。</Typography>
                <Typography variant='content2'>(4)安全保护服务，是指提供保护人身安全和财产安全，维护社会治安等的业务活动。包括场所住宅保安、特种保安、安全系统监控以及其他安保服务。</Typography>
                <Typography variant='content1'>9.其他现代服务。</Typography>
                <Typography variant='content2'>其他现代服务，是指除研发和技术服务、信息技术服务、文化创意服务、物流辅助服务、租赁服务、鉴证咨询服务、广播影视服务和商务辅助服务以外的现代服务。</Typography>
                <Typography id='201BC799' variant='title5'>(七)生活服务。</Typography>
                <Typography variant='content2'>生活服务，是指为满足城乡居民日常生活需求提供的各类服务活动。包括文化体育服务、教育医疗服务、旅游娱乐服务、餐饮住宿服务、居民日常服务和其他生活服务。</Typography>
                <Typography variant='content1'>1.文化体育服务。</Typography>
                <Typography variant='content2'>文化体育服务，包括文化服务和体育服务。</Typography>
                <Typography variant='content2'>(1)文化服务，是指为满足社会公众文化生活需求提供的各种服务。包括：文艺创作、文艺表演、文化比赛，图书馆的图书和资料借阅，档案馆的档案管理，文物及非物质遗产保护，组织举办宗教活动、科技活动、文化活动，提供游览场所。</Typography>
                <Typography variant='content2'>(2)体育服务，是指组织举办体育比赛、体育表演、体育活动，以及提供体育训练、体育指导、体育管理的业务活动。</Typography>
                <Typography variant='content1'>2.教育医疗服务。</Typography>
                <Typography variant='content2'>教育医疗服务，包括教育服务和医疗服务。</Typography>
                <Typography variant='content2'>(1)教育服务，是指提供学历教育服务、非学历教育服务、教育辅助服务的业务活动。</Typography>
                <Typography variant='content2'>学历教育服务，是指根据教育行政管理部门确定或者认可的招生和教学计划组织教学，并颁发相应学历证书的业务活动。包括初等教育、初级中等教育、高级中等教育、高等教育等。</Typography>
                <Typography variant='content2'>非学历教育服务，包括学前教育、各类培训、演讲、讲座、报告会等。</Typography>
                <Typography variant='content2'>教育辅助服务，包括教育测评、考试、招生等服务。</Typography>
                <Typography variant='content2'>(2)医疗服务，是指提供医学检查、诊断、治疗、康复、预防、保健、接生、计划生育、防疫服务等方面的服务，以及与这些服务有关的提供药品、医用材料器具、救护车、病房住宿和伙食的业务。</Typography>
                <Typography variant='content1'>3.旅游娱乐服务。</Typography>
                <Typography variant='content2'>旅游娱乐服务，包括旅游服务和娱乐服务。</Typography>
                <Typography variant='content2'>(1)旅游服务，是指根据旅游者的要求，组织安排交通、游览、住宿、餐饮、购物、文娱、商务等服务的业务活动。</Typography>
                <Typography variant='content2'>(2)娱乐服务，是指为娱乐活动同时提供场所和服务的业务。</Typography>
                <Typography variant='content2'>具体包括：歌厅、舞厅、、酒吧、台球、高尔夫球、保龄球、游艺(包括射击、狩猎、跑马、游戏机、蹦极、卡丁车、热气球、动力伞、射箭、飞镖)。</Typography>
                <Typography variant='content1'>4.餐饮住宿服务。</Typography>
                <Typography variant='content2'>餐饮住宿服务，包括餐饮服务和住宿服务。</Typography>
                <Typography variant='content2'>(1)餐饮服务，是指通过同时提供饮食和饮食场所的方式为消费者提供饮食消费服务的业务活动。</Typography>
                <Typography variant='content2'>(2)住宿服务，是指提供住宿场所及配套服务等的活动。包括宾馆、旅馆、旅社、度假村和其他经营性住宿场所提供的住宿服务。</Typography>
                <Typography variant='content1'>5.居民日常服务。</Typography>
                <Typography variant='content2'>居民日常服务，是指主要为满足居民个人及其家庭日常生活需求提供的服务，包括市容市政管理、家政、婚庆、养老、殡葬、照料和护理、救助救济、美容美发、按摩、桑拿、氧吧、足疗、沐浴、洗染、摄影扩印等服务。</Typography>
                <Typography variant='content1'>6.其他生活服务。</Typography>
                <Typography variant='content2'>其他生活服务，是指除文化体育服务、教育医疗服务、旅游娱乐服务、餐饮住宿服务和居民日常服务之外的生活服务。</Typography>
                <Typography id='025EDCF2' variant='title4'>二、销售无形资产</Typography>
                <Typography variant='content2'>销售无形资产，是指转让无形资产所有权或者使用权的业务活动。无形资产，是指不具实物形态，但能带来经济利益的资产，包括技术、商标、著作权、商誉、自然资源使用权和其他权益性无形资产。</Typography>
                <Typography variant='content2'>技术，包括专利技术和非专利技术。</Typography>
                <Typography variant='content2'>自然资源使用权，包括土地使用权、海域使用权、探矿权、采矿权、取水权和其他自然资源使用权。</Typography>
                <Typography variant='content2'>其他权益性无形资产，包括基础设施资产经营权、公共事业特许权、配额、经营权(包括特许经营权、连锁经营权、其他经营权)、经销权、分销权、代理权、会员权、席位权、网络游戏虚拟道具、域名、名称权、肖像权、冠名权、转会费等。</Typography>
                <Typography id='8CD65321' variant='title4'>三、销售不动产</Typography>
                <Typography variant='content2'>销售不动产，是指转让不动产所有权的业务活动。不动产，是指不能移动或者移动后会引起性质、形状改变的财产，包括建筑物、构筑物等。</Typography>
                <Typography variant='content2'>建筑物，包括住宅、商业营业用房、办公楼等可供居住、工作或者进行其他活动的建造物。</Typography>
                <Typography variant='content2'>构筑物，包括道路、桥梁、隧道、水坝等建造物。</Typography>
                <Typography variant='content2'>转让建筑物有限产权或者永久使用权的，转让在建的建筑物或者构筑物所有权的，以及在转让建筑物或者构筑物时一并转让其所占土地的使用权的，按照销售不动产缴纳增值税。</Typography>
            </Callout>
        </Laws>
    );
}
