import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';

import Home from './Contents/Home'; // 主页
import Constitution from './Contents/Constitution'; // 宪法
import LegislationLaw from './Contents/LegislationLaw'; // 立法法
import CivilCode from './Contents/CivilCode'; // 民法典
import CivilProcedureLaw from './Contents/CivilProcedureLaw'; // 民事诉讼法
import CustomerProtectionLaw from './Contents/CustomerProtectionLaw'; // 消费者权益保护法
import CustomerProtectionLawImplementingRegulations from './Contents/CustomerProtectionLawImplementingRegulations'; // 消费者权益保护法实施条例
import FoodSafetyLaw from './Contents/FoodSafetyLaw'; // 食品安全法
import SalesOfServicesIntangibleAssetsRealEstateNotes from './Contents/SalesOfServicesIntangibleAssetsRealEstateNotes'; // 营业税改征增值税试点实施办法 附销售服务、无形资产、不动产注释

import AdministrativeProcedureLaw from './Contents/Default'; // 行政诉讼法
import AdministrativeReconsiderationLaw from './Contents/Default'; // 行政复议法
import CriminalLaw from './Contents/Default'; // 刑法
import CriminalProcedureLaw from './Contents/Default'; // 刑事诉讼法
import MeasurementLaw from './Contents/Default'; // 计量法
import PersonalInformationProtectionLaw from './Contents/Default'; // 个人信息保护法
import PublicSecurityAdministrationPunishmentLaw from './Contents/Default'; // 治安管理处罚法
import AdministrativeEnforcementLaw from './Contents/Default'; // 行政强制法
import AdministrativeLicenseLaw from './Contents/Default'; // 行政许可法
import AdministrativePunishmentLaw from './Contents/Default'; // 行政处罚法
import CompanyLaw from './Contents/Default'; // 公司法
import IndividualIncomeTaxLaw from './Contents/Default'; // 个人所得税法
import JuvenileProtectionLaw from './Contents/Default'; // 未成年人保护法
import PreschoolEducationLaw from './Contents/Default'; // 学前教育法
import EducationLaw from './Contents/Default'; // 教育法
import NoisePollutionPreventionLaw from './Contents/Default'; // 噪声污染防治法
import PopulationAndFamilyPlanningLaw from './Contents/Default'; // 人口与计划生育法
import DataSecurityLaw from './Contents/Default'; // 数据安全法
import FireControlLaw from './Contents/Default'; // 消防法
import RoadTrafficSafetyLaw from './Contents/Default'; // 道路交通安全法
import AdvertisingLaw from './Contents/Default'; // 广告法
import CopyrightLaw from './Contents/Default'; // 版权法
import AntiUnfairCompetitionLaw from './Contents/Default'; // 反不正当竞争法
import AntiMonopolyLaw from './Contents/Default'; // 反垄断法
import HigherEducationLaw from './Contents/Default'; // 高等教育法
import CompulsoryEducationLaw from './Contents/Default'; // 义务教育法
import CorporateIncomeTaxLaw from './Contents/Default'; // 企业所得税法
import VehiclePurchaseTaxLaw from './Contents/Default'; // 车辆购置税法
import SocialInsuranceLaw from './Contents/Default'; // 社会保险法
import ECommerceLaw from './Contents/Default'; // 电子商务法
import NotarizationLaw from './Contents/Default'; // 公证法
import ArbitrationLaw from './Contents/Default'; // 仲裁法
import CyberSecurityLaw from './Contents/Default'; // 网络安全法
import TourismLaw from './Contents/Default'; // 旅游法
import PostalLaw from './Contents/Default'; // 邮政法
import InsuranceLaw from './Contents/Default'; // 保险法
import CommercialBankLaw from './Contents/Default'; // 商业银行法
import ResidentIdentityCardLaw from './Contents/Default'; // 居民身份证法
import TeacherLaw from './Contents/Default'; // 教师法
import HouseholdRegistrationRegulation from './Contents/Default'; // 户口登记条例
import StandardizationLaw from './Contents/Default'; // 标准化法
import ComputerNetworkManagementRegulation from './Contents/Default'; // 计算机信息网络国际联网管理暂行规定
import ComputerNetworkManagementImplementation from './Contents/Default'; // 计算机信息网络国际联网管理暂行规定实施办法
import ExpressRegulation from './Contents/Default'; // 快递暂行条例
import SalesTaxToValueAddedTaxImplementation from './Contents/Default'; // 关于全面推开营业税改征增值税试点的通知
import SalesTaxToValueAddedTaxNotice from './Contents/Default'; // 营业税改征增值税试点实施办法
import ExpressMarketManagementRegulation from './Contents/Default'; // 快递市场管理办法
import UrbanRealEstateManagementLaw from './Contents/Default'; // 城市房地产管理法
import PropertyManagementRegulation from './Contents/Default'; // 物业管理条例
import TelecomRegulation from './Contents/Default'; // 电信条例
import InternetInformationServiceManagementRegulation from './Contents/Default'; // 互联网信息服务管理办法
import SMSAdministrationProvisions from './Contents/Default'; // 短信服务管理办法
import AppsPersonalInformationScopeProvisions from './Contents/Default'; // 常见类型移动互联网应用程序必要个人信息范围规定
import SpamPhoneCallsComprehensiveControl from './Contents/Default'; // 综合整治骚扰电话专项行动方案
import IdentifyingAppsIllegalOrIrregularCollectionAndUseOfPersonalInformation from './Contents/Default'; // App违法违规收集使用个人信息行为认定方法

const menuItems = [

    // 说明
    { text: '说明', icon: null, path: null, link: null, element: null, },
    { text: '主页', icon: <HomeIcon />, path: '/', link: '#/', element: <Home />, },

    // 总则
    { text: '总则', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国宪法', icon: <GavelIcon />, path: 'Constitution', link: '#/Constitution', element: <Constitution />, },
    { text: '中华人民共和国立法法', icon: <GavelIcon />, path: 'LegislationLaw', link: '#/LegislationLaw', element: <LegislationLaw />, },


    // 民法
    { text: '民法', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国民法典', icon: <GavelIcon />, path: 'CivilCode', link: '#/CivilCode', element: <CivilCode />, },
    { text: '中华人民共和国民事诉讼法', icon: <GavelIcon />, path: 'CivilProcedureLaw', link: '#/CivilProcedureLaw', element: <CivilProcedureLaw />, },

    // 信息
    { text: '信息', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国个人信息保护法', icon: <GavelIcon />, path: 'PersonalInformationProtectionLaw', link: '#/PersonalInformationProtectionLaw', element: <PersonalInformationProtectionLaw />, },
    { text: '中华人民共和国网络安全法', icon: <GavelIcon />, path: 'CyberSecurityLaw', link: '#/CyberSecurityLaw', element: <CyberSecurityLaw />, },
    { text: '中华人民共和国数据安全法', icon: <GavelIcon />, path: 'DataSecurityLaw', link: '#/DataSecurityLaw', element: <DataSecurityLaw />, },
    { text: '常见类型移动互联网应用程序必要个人信息范围规定', icon: <GavelIcon />, path: 'AppsPersonalInformationScopeProvisions', link: '#/AppsPersonalInformationScopeProvisions', element: <AppsPersonalInformationScopeProvisions />, },
    { text: '综合整治骚扰电话专项行动方案', icon: <GavelIcon />, path: 'SpamPhoneCallsComprehensiveControl', link: '#/SpamPhoneCallsComprehensiveControl', element: <SpamPhoneCallsComprehensiveControl />, },
    { text: 'App违法违规收集使用个人信息行为认定方法', icon: <GavelIcon />, path: 'IdentifyingAppsIllegalOrIrregularCollectionAndUseOfPersonalInformation', link: '#/IdentifyingAppsIllegalOrIrregularCollectionAndUseOfPersonalInformation', element: <IdentifyingAppsIllegalOrIrregularCollectionAndUseOfPersonalInformation />, },

    // 通信
    { text: '通信', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国电信条例', icon: <GavelIcon />, path: 'TelecomRegulation', link: '#/TelecomRegulation', element: <TelecomRegulation />, },
    { text: '中华人民共和国互联网信息服务管理办法', icon: <GavelIcon />, path: 'InternetInformationServiceManagementRegulation', link: '#/InternetInformationServiceManagementRegulation', element: <InternetInformationServiceManagementRegulation />, },
    { text: '通信短信息服务管理规定', icon: <GavelIcon />, path: 'SMSAdministrationProvisions', link: '#/SMSAdministrationProvisions', element: <SMSAdministrationProvisions />, },

    // 消费
    { text: '消费', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国消费者权益保护法', icon: <GavelIcon />, path: 'CustomerProtectionLaw', link: '#/CustomerProtectionLaw', element: <CustomerProtectionLaw />, },
    { text: '中华人民共和国消费者权益保护法实施条例', icon: <GavelIcon />, path: 'CustomerProtectionLawImplementingRegulations', link: '#/CustomerProtectionLawImplementingRegulations', element: <CustomerProtectionLawImplementingRegulations />, },
    { text: '中华人民共和国食品安全法', icon: <GavelIcon />, path: 'FoodSafetyLaw', link: '#/FoodSafetyLaw', element: <FoodSafetyLaw />, },
    { text: '中华人民共和国计量法', icon: <GavelIcon />, path: 'MeasurementLaw', link: '#/MeasurementLaw', element: <MeasurementLaw />, },

    // 生活
    { text: '生活', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国噪声污染防治法', icon: <GavelIcon />, path: 'NoisePollutionPreventionLaw', link: '#/NoisePollutionPreventionLaw', element: <NoisePollutionPreventionLaw />, },
    { text: '中华人民共和国旅游法', icon: <GavelIcon />, path: 'TourismLaw', link: '#/TourismLaw', element: <TourismLaw />, },

    // 快递
    { text: '快递', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国邮政法', icon: <GavelIcon />, path: 'PostalLaw', link: '#/PostalLaw', element: <PostalLaw />, },
    { text: '快递暂行条例', icon: <GavelIcon />, path: 'ExpressRegulation', link: '#/ExpressRegulation', element: <ExpressRegulation />, },
    { text: '快递市场管理办法', icon: <GavelIcon />, path: 'ExpressMarketManagementRegulation', link: '#/ExpressMarketManagementRegulation', element: <ExpressMarketManagementRegulation />, },

    // 财税
    { text: '财税', icon: null, path: null, link: null, element: null, },
    { text: '关于全面推开营业税改征增值税试点的通知', icon: <GavelIcon />, path: 'SalesTaxToValueAddedTaxNotice', link: '#/SalesTaxToValueAddedTaxNotice', element: <SalesTaxToValueAddedTaxNotice />, },
    { text: '营业税改征增值税试点实施办法', icon: <GavelIcon />, path: 'SalesTaxToValueAddedTaxImplementation', link: '#/SalesTaxToValueAddedTaxImplementation', element: <SalesTaxToValueAddedTaxImplementation />, },
    { text: '销售服务、无形资产、不动产注释', icon: <GavelIcon />, path: 'SalesOfServicesIntangibleAssetsRealEstateNotes', link: '#/SalesOfServicesIntangibleAssetsRealEstateNotes', element: <SalesOfServicesIntangibleAssetsRealEstateNotes />, },
    { text: '中华人民共和国个人所得税法', icon: <GavelIcon />, path: 'IndividualIncomeTaxLaw', link: '#/IndividualIncomeTaxLaw', element: <IndividualIncomeTaxLaw />, },
    { text: '中华人民共和国企业所得税法', icon: <GavelIcon />, path: 'CorporateIncomeTaxLaw', link: '#/CorporateIncomeTaxLaw', element: <CorporateIncomeTaxLaw />, },

    // 行政
    { text: '行政', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国治安管理处罚法', icon: <GavelIcon />, path: 'PublicSecurityAdministrationPunishmentLaw', link: '#/PublicSecurityAdministrationPunishmentLaw', element: <PublicSecurityAdministrationPunishmentLaw />, },
    { text: '中华人民共和国行政处罚法', icon: <GavelIcon />, path: 'AdministrativePunishmentLaw', link: '#/AdministrativePunishmentLaw', element: <AdministrativePunishmentLaw />, },
    { text: '中华人民共和国行政强制法', icon: <GavelIcon />, path: 'AdministrativeEnforcementLaw', link: '#/AdministrativeEnforcementLaw', element: <AdministrativeEnforcementLaw />, },
    { text: '中华人民共和国行政许可法', icon: <GavelIcon />, path: 'AdministrativeLicenseLaw', link: '#/AdministrativeLicenseLaw', element: <AdministrativeLicenseLaw />, },
    { text: '中华人民共和国行政复议法', icon: <GavelIcon />, path: 'AdministrativeReconsiderationLaw', link: '#/AdministrativeReconsiderationLaw', element: <AdministrativeReconsiderationLaw />, },
    { text: '中华人民共和国行政诉讼法', icon: <GavelIcon />, path: 'AdministrativeProcedureLaw', link: '#/AdministrativeProcedureLaw', element: <AdministrativeProcedureLaw />, },
    { text: '中华人民共和国消防法', icon: <GavelIcon />, path: 'FireControlLaw', link: '#/FireControlLaw', element: <FireControlLaw />, },

    // 刑事
    { text: '刑事', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国刑法', icon: <GavelIcon />, path: 'CriminalLaw', link: '#/CriminalLaw', element: <CriminalLaw />, },
    { text: '中华人民共和国刑事诉讼法', icon: <GavelIcon />, path: 'CriminalProcedureLaw', link: '#/CriminalProcedureLaw', element: <CriminalProcedureLaw />, },

    // 劳动
    { text: '劳动', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国公司法', icon: <GavelIcon />, path: 'CompanyLaw', link: '#/CompanyLaw', element: <CompanyLaw />, },
    { text: '中华人民共和国社会保险法', icon: <GavelIcon />, path: 'SocialInsuranceLaw', link: '#/SocialInsuranceLaw', element: <SocialInsuranceLaw />, },

    // 商业
    { text: '商业', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国广告法', icon: <GavelIcon />, path: 'AdvertisingLaw', link: '#/AdvertisingLaw', element: <AdvertisingLaw />, },
    { text: '中华人民共和国标准化法', icon: <GavelIcon />, path: 'StandardizationLaw', link: '#/StandardizationLaw', element: <StandardizationLaw />, },
    { text: '中华人民共和国反不正当竞争法', icon: <GavelIcon />, path: 'AntiUnfairCompetitionLaw', link: '#/AntiUnfairCompetitionLaw', element: <AntiUnfairCompetitionLaw />, },
    { text: '中华人民共和国反垄断法', icon: <GavelIcon />, path: 'AntiMonopolyLaw', link: '#/AntiMonopolyLaw', element: <AntiMonopolyLaw />, },
    { text: '中华人民共和国电子商务法', icon: <GavelIcon />, path: 'ECommerceLaw', link: '#/ECommerceLaw', element: <ECommerceLaw />, },
    { text: '中华人民共和国著作权法', icon: <GavelIcon />, path: 'CopyrightLaw', link: '#/CopyrightLaw', element: <CopyrightLaw />, },

    // 教育
    { text: '教育', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国人口与计划生育法', icon: <GavelIcon />, path: 'PopulationAndFamilyPlanningLaw', link: '#/PopulationAndFamilyPlanningLaw', element: <PopulationAndFamilyPlanningLaw />, },
    { text: '中华人民共和国未成年人保护法', icon: <GavelIcon />, path: 'JuvenileProtectionLaw', link: '#/JuvenileProtectionLaw', element: <JuvenileProtectionLaw />, },
    { text: '中华人民共和国学前教育法', icon: <GavelIcon />, path: 'PreschoolEducationLaw', link: '#/PreschoolEducationLaw', element: <PreschoolEducationLaw />, },
    { text: '中华人民共和国义务教育法', icon: <GavelIcon />, path: 'CompulsoryEducationLaw', link: '#/CompulsoryEducationLaw', element: <CompulsoryEducationLaw />, },
    { text: '中华人民共和国教育法', icon: <GavelIcon />, path: 'EducationLaw', link: '#/EducationLaw', element: <EducationLaw />, },
    { text: '中华人民共和国高等教育法', icon: <GavelIcon />, path: 'HigherEducationLaw', link: '#/HigherEducationLaw', element: <HigherEducationLaw />, },
    { text: '中华人民共和国教师法', icon: <GavelIcon />, path: 'TeacherLaw', link: '#/TeacherLaw', element: <TeacherLaw />, },

    // 银保
    { text: '银保', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国保险法', icon: <GavelIcon />, path: 'InsuranceLaw', link: '#/InsuranceLaw', element: <InsuranceLaw />, },
    { text: '中华人民共和国商业银行法', icon: <GavelIcon />, path: 'CommercialBankLaw', link: '#/CommercialBankLaw', element: <CommercialBankLaw />, },

    // 户籍
    { text: '户籍', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国居民身份证法', icon: <GavelIcon />, path: 'ResidentIdentityCardLaw', link: '#/ResidentIdentityCardLaw', element: <ResidentIdentityCardLaw />, },
    { text: '中华人民共和国户口登记条例', icon: <GavelIcon />, path: 'HouseholdRegistrationRegulation', link: '#/HouseholdRegistrationRegulation', element: <HouseholdRegistrationRegulation />, },

    // 车辆
    { text: '车辆', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国车辆购置税法', icon: <GavelIcon />, path: 'VehiclePurchaseTaxLaw', link: '#/VehiclePurchaseTaxLaw', element: <VehiclePurchaseTaxLaw />, },
    { text: '中华人民共和国道路交通安全法', icon: <GavelIcon />, path: 'RoadTrafficSafetyLaw', link: '#/RoadTrafficSafetyLaw', element: <RoadTrafficSafetyLaw />, },

    // 房产
    { text: '房产', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国城市房地产管理法', icon: <GavelIcon />, path: 'UrbanRealEstateManagementLaw', link: '#/UrbanRealEstateManagementLaw', element: <UrbanRealEstateManagementLaw />, },
    { text: '中华人民共和国物业管理条例', icon: <GavelIcon />, path: 'PropertyManagementRegulation', link: '#/PropertyManagementRegulation', element: <PropertyManagementRegulation />, },

    // 喷小白专用
    { text: '喷小白专用', icon: null, path: null, link: null, element: null, },
    { text: '计算机信息网络国际联网管理暂行规定', icon: <GavelIcon />, path: 'ComputerNetworkManagementRegulation', link: '#/ComputerNetworkManagementRegulation', element: <ComputerNetworkManagementRegulation />, },
    { text: '计算机信息网络国际联网管理暂行规定实施办法', icon: <GavelIcon />, path: 'ComputerNetworkManagementImplementation', link: '#/ComputerNetworkManagementImplementation', element: <ComputerNetworkManagementImplementation />, },

    // 未分类
    { text: '未分类', icon: null, path: null, link: null, element: null, },
    { text: '中华人民共和国仲裁法', icon: <GavelIcon />, path: 'ArbitrationLaw', link: '#/ArbitrationLaw', element: <ArbitrationLaw />, },
    { text: '中华人民共和国公证法', icon: <GavelIcon />, path: 'NotarizationLaw', link: '#/NotarizationLaw', element: <NotarizationLaw />, },

];

export default menuItems;
