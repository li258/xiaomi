﻿-- 1.创建小米商城数据库  -xiaomi
CREATE DATABASE xiaomi CHARSET=utf8;
USE xiaomi;
 
-- 2.创建小米图片轮播表
CREATE TABLE xm_imagelist(
  id      INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title   VARCHAR(50)
);
INSERT INTO xm_imagelist VALUES(null,"http://127.0.0.1:3000/img/banner1.jpg","信息图片");
INSERT INTO xm_imagelist VALUES(null,"http://127.0.0.1:3000/img/banner2.jpg","信息图片");
INSERT INTO xm_imagelist VALUES(null,"http://127.0.0.1:3000/img/banner3.jpg","信息图片");
INSERT INTO xm_imagelist VALUES(null,"http://127.0.0.1:3000/img/banner4.jpg","信息图片");
INSERT INTO xm_imagelist VALUES(null,"http://127.0.0.1:3000/img/banner5.jpg","信息图片");


-- 3.创建小米用户信息表
CREATE TABLE xm_user(
  uid    INT PRIMARY KEY AUTO_INCREMENT,
  uname  VARCHAR(25),
  upwd   VARCHAR(32)
);
INSERT INTO xm_user VALUES (null,'tom',md5('123'));
INSERT INTO xm_user VALUES (null,'jerry',md5('123'));
INSERT INTO xm_user VALUES (null,'dale',md5('123'));
INSERT INTO xm_user VALUES (null,'siri',md5('123'));

-- 4.创建小米商品信息表
CREATE TABLE xm_product(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT(11),
  pname VARCHAR(128),
  promise VARCHAR(64),
  price DECIMAL(10,2),
  lname VARCHAR(32),
  details VARCHAR(1024),
  color  VARCHAR(32),
  sold_count INT(11),
  img_url VARCHAR(255)
);
INSERT INTO xm_product VALUES (null,'1','小米8 青春版','潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器',1399,'小米手机','4GB+64GB 全网通','深空灰',2900,'http://127.0.0.1:3000/img/phone_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'1','小米8 青春版','潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器',1699,'小米手机','6GB+64GB 全网通','深空灰',2900,'http://127.0.0.1:3000/img/phone_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'1','小米8 青春版','潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器',1699,'小米手机','6GB+64GB 全网通','梦幻蓝',2900,'http://127.0.0.1:3000/img/phone_pms_2.jpg');
INSERT INTO xm_product VALUES (null,'1','小米8 青春版','潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器',1699,'小米手机','6GB+64GB 全网通','深空灰',2900,'http://127.0.0.1:3000/img/phone_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'1','小米8 青春版','潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器',1999,'小米手机','6GB+128GB 全网通','深空灰',2900,'http://127.0.0.1:3000/img/phone_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'1','小米8 青春版','潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器',1999,'小米手机','6GB+128GB 全网通','暮光金',2900,'http://127.0.0.1:3000/img/phone_pms_3.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',899,'小米手机','3GB+32GB 全网通','赤焰红',2900,'http://127.0.0.1:3000/img/phone_red_2.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',899,'小米手机','3GB+32GB 全网通','流沙金',2900,'http://127.0.0.1:3000/img/phone_red_3.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',899,'小米手机','3GB+32GB 全网通','巴厘蓝',2900,'http://127.0.0.1:3000/img/phone_red_4.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',899,'小米手机','3GB+32GB 全网通','曜石黑',2900,'http://127.0.0.1:3000/img/phone_red_1.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1099,'小米手机','4GB+32GB 全网通','赤焰红',2900,'http://127.0.0.1:3000/img/phone_red_2.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1099,'小米手机','4GB+32GB 全网通','流沙金',2900,'http://127.0.0.1:3000/img/phone_red_3.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1099,'小米手机','4GB+32GB 全网通','巴厘蓝',2900,'http://127.0.0.1:3000/img/phone_red_4.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1099,'小米手机','4GB+32GB 全网通','曜石黑',2900,'http://127.0.0.1:3000/img/phone_red_1.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1299,'小米手机','4GB+64GB 全网通','赤焰红',2900,'http://127.0.0.1:3000/img/phone_red_2.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1299,'小米手机','4GB+64GB 全网通','流沙金',2900,'http://127.0.0.1:3000/img/phone_red_3.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1299,'小米手机','4GB+64GB 全网通','巴厘蓝',2900,'http://127.0.0.1:3000/img/phone_red_4.jpg');
INSERT INTO xm_product VALUES (null,'2','红米6 Pro','高颜值大电量 / 后置1200万 AI双摄 / 5.84"异形全面屏 / 2+1 卡槽 / 骁龙625 八核处理器 / 小爱同学 AI语音助理',1299,'小米手机','4GB+64GB 全网通','曜石黑',2900,'http://127.0.0.1:3000/img/phone_red_1.jpg');
INSERT INTO xm_product VALUES (null,'3','小米电视4 75英寸','金属机身 / 4K HDR 超高清画质 / 11.4mm超薄设计 / Amlogic Cortex A53 四核 1.8GHz / 2GB+32GB 超大内存 / 小爱同学 AI语音助理',8999,'小米家电','75英寸','黑色',2900,'http://127.0.0.1:3000/img/app_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'3','小米电视4A 32英寸','64位四核处理器 / 1GB+4GB大内存 / 高清液晶屏 / 第6代画质引擎 / 人工智能系统PatchWall / 轻至4kg',899,'小米家电','32英寸','黑色',2900,'http://127.0.0.1:3000/img/app_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'3','小米电视4A 40英寸','FHD全高清屏 / 人工智能语音系统 / 超窄边 / 海量片源 / 64位四核处理器',1299,'小米家电','40英寸','黑色',2900,'http://127.0.0.1:3000/img/app_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'3','小米电视4A 50英寸','4K HDR / 人工智能 / 蓝牙语音遥控器 / 高性能 / 大存储 / 海量片源',1999,'小米家电','50英寸','黑色',2900,'http://127.0.0.1:3000/img/app_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'3','小米电视4A 55英寸','超高清屏 / 2GB+8GB / 真四核64位高性能处理器 / 超窄边框 / 智能语音 / 杜比音效平板电视 / 海量高清片源 / 支持壁挂',2299,'小米家电','55英寸','黑色',2900,'http://127.0.0.1:3000/img/app_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'3','43'' 小米电视4A 体育版','人工智能系统 / 全高清屏 / 大内存 / 高性能 / 内存多',1499,'小米家电','43英寸','金色',2900,'http://127.0.0.1:3000/img/app_pms_6.jpg');
INSERT INTO xm_product VALUES (null,'3','43"电视4A 青春版','全高清屏 / 人工智能语音 / 1GB+8GB大内存 / 杜比音效 / 海量片源 / PatchWall',1499,'小米家电','43英寸','黑色',2900,'http://127.0.0.1:3000/img/app_pms_3.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',1899,'小米电脑','10英寸 LTE版 64GB','金色',2900,'http://127.0.0.1:3000/img/computer_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',1899,'小米电脑','10英寸 LTE版 64GB','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_2.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',2099,'小米电脑','10英寸 LTE版 128GB','金色',2900,'http://127.0.0.1:3000/img/computer_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',2099,'小米电脑','10英寸 LTE版 128GB','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_2.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',1099,'小米电脑','8英寸 WIFI版 32GB','金色',2900,'http://127.0.0.1:3000/img/computer_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',1099,'小米电脑','8英寸 WIFI版 32GB','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_2.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',1399,'小米电脑','8英寸 WIFI版 64GB','金色',2900,'http://127.0.0.1:3000/img/computer_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'4','小米平板4 / 小米平板4 Plus','大电量，超长续航 / 支持AI人脸识别 / 后置1300万，前置500万摄像头 / 金属机身，超窄边框 / 骁龙660八核处理器',1399,'小米电脑','8英寸 WIFI版 64GB','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_2.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',6699,'小米电脑',' i5 8G 1T+256G 1050Ti 4G','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_3.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',7799,'小米电脑',' i5 8G 1T+256G 1060 6G','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_3.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',8999,'小米电脑',' i7 16G 1T+256G 1060 6G','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_3.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',7499,'小米电脑',' i7 16G 1T+256G 1050Ti 4G','黑色',2900,'http://127.0.0.1:3000/img/computer_pms_3.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',6699,'小米电脑',' i5 8G 1T+256G 1050Ti 4G','白色',2900,'http://127.0.0.1:3000/img/computer_pms_4.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',7799,'小米电脑',' i5 8G 1T+256G 1060 6G','白色',2900,'http://127.0.0.1:3000/img/computer_pms_4.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',8999,'小米电脑',' i7 16G 1T+256G 1060 6G','白色',2900,'http://127.0.0.1:3000/img/computer_pms_4.jpg');
INSERT INTO xm_product VALUES (null,'4','15.6寸游戏本 八代增强版','第八代酷睿处理器 ／ 72%NTSC高色域窄边框全高清屏 ／ 256G PCIe高速固态 ／ 双烤不限频不降频',7499,'小米电脑',' i7 16G 1T+256G 1050Ti 4G','白色',2900,'http://127.0.0.1:3000/img/computer_pms_4.jpg');
INSERT INTO xm_product VALUES (null,'5','小米手环3','微信、QQ来电等消息内容直接显示 / 50米游泳防水 / 运动数据抬腕可见 / 心率、睡眠、记步，健康管理 / 长达20天续航能力',169,'小米家电','小米手环','黑色',2900,'http://127.0.0.1:3000/img/watch_pms_1.jpg');
INSERT INTO xm_product VALUES (null,'5','米家互联网空调','1.5 匹 / 变频 / 高效制冷热',1999,'小米家电','米家互联网空调','白色',2900,'http://127.0.0.1:3000/img/app_pms_4.jpg');
INSERT INTO xm_product VALUES (null,'5','米家投影仪','物理 1080P 分辨率 / 800 ANSI流明真实高亮度 / 免安装，开机即用 / 10年长寿命LED光源',3999,'小米家电','米家投影仪','锖色',2900,'http://127.0.0.1:3000/img/app_pms_5.jpg');
INSERT INTO xm_product VALUES (null,'5','米家扫地机器人','高精度激光测距，智能规划路径 / 1800Pa 大风压澎湃吸力 / 远程智能控制 ，定时清扫 / 大电池持久清扫',1699,'小米家电','米家扫地机器人','白色',2900,'http://127.0.0.1:3000/img/app_pms_7.jpg');
INSERT INTO xm_product VALUES (null,'5','米家插线板6位基础版','新国标1mm²线材更安全 / 3个USB充电口 / 多重保护',79,'小米家电','含3口USB 2A快充','白色',2900,'http://127.0.0.1:3000/img/app_pms_8.jpg');
INSERT INTO xm_product VALUES (null,'6','九号平衡车Plus','九号平衡车Plus载物套装',3598,'小米出行','载物版','黑色',2900,'http://127.0.0.1:3000/img/app_pms_9.jpg');
INSERT INTO xm_product VALUES (null,'6','米家电助力折叠自行车','力矩传感助力 / 骑行数据监测 / 便携折叠设计 / 智能App，出行好帮手',2999,'小米出行','电助力折叠自行车','黑色',2900,'http://127.0.0.1:3000/img/app_pms_10.jpg');
INSERT INTO xm_product VALUES (null,'7','小米无人机4K版套装','易上手 / 高品质影像 / 安全 / 小巧便携',2999,'小米智能','4K套装版','白色',2900,'http://127.0.0.1:3000/img/app_pms_11.jpg');
INSERT INTO xm_product VALUES (null,'7','米家小白智能摄像机','1080p 高清 / 360° 视角 / AI 增强移动侦测 / H.265 编码 / 升级红外夜视 / “小爱同学” 语音互动 / 视频留言九号平衡车Plus载物套装',399,'小米智能','增强版','白色',2900,'http://127.0.0.1:3000/img/app_pms_12.jpg');
INSERT INTO xm_product VALUES (null,'7','小米路由器 HD/Pro','全新金属机身设计 / AC 2600双频 / 4X4全向性天线 / 802.11ac wave2 / 支持MU-MIMO / 小米路由器 HD配有1TB高清流媒体硬盘',449,'小米智能','Pro版','星空灰',2900,'http://127.0.0.1:3000/img/app_pms_13.jpg');
INSERT INTO xm_product VALUES (null,'7','小米路由器 HD/Pro','全新金属机身设计 / AC 2600双频 / 4X4全向性天线 / 802.11ac wave2 / 支持MU-MIMO / 小米路由器 HD配有1TB高清流媒体硬盘',449,'小米智能','HD版','星空灰',2900,'http://127.0.0.1:3000/img/app_pms_13.jpg');
INSERT INTO xm_product VALUES (null,'8','小米移动电源2','双USB接口输出 / 双向快充 / 锂聚合物电芯 / 铝合金外壳',79,'小米配件','10000mAh','黑色',2900,'http://127.0.0.1:3000/img/app_pms_14.jpg');
INSERT INTO xm_product VALUES (null,'8','小米移动电源2','双USB接口输出 / 双向快充 / 锂聚合物电芯 / 铝合金外壳',79,'小米配件','10000mAh','银色',2900,'http://127.0.0.1:3000/img/app_pms_15.jpg');
INSERT INTO xm_product VALUES (null,'8','SanDisk 32GB存储卡','传输速度高达100MB/s，可用于拍摄全高清视频及4K超清视频',129,'小米配件','100MB/s','金色',2900,'http://127.0.0.1:3000/img/app_pms_16.jpg');
INSERT INTO xm_product VALUES (null,'8','小米无线充电器','Qi 无线标准 / 10W MAX 无线快充 / 智能兼容 / 金属质感机身',69,'小米配件','通用快充版','黑色',2900,'http://127.0.0.1:3000/img/app_pms_17.jpg');
INSERT INTO xm_product VALUES (null,'8','彩虹5号电池','麦克赛尔监制电池核芯 / 电量持久，强劲有力 / 碱性10粒装5号环保电池，无汞无镉 / 防泄漏技术，双重安全保障 / 十种绚丽色彩，送收纳盒',9.9,'小米配件','10粒标准装','彩虹色',2900,'http://127.0.0.1:3000/img/app_pms_18.jpg');
INSERT INTO xm_product VALUES (null,'8','悟空米兔','金箍棒、紧箍咒，经典悟空造型 / 优质pp棉填充 / 短毛绒面料，手感舒适',49,'小米配件','情侣版','悟空',2900,'http://127.0.0.1:3000/img/app_pms_19.jpg');
INSERT INTO xm_product VALUES (null,'8','1MORE头戴式耳机','塑钢钛双曲线记忆头带材质，强韧舒适 / 新型航太金属复合振膜，感受真正的震撼与澎湃 / 双系统智能线控技术，适配苹果与主流安卓机型',299,'小米配件','头戴式','红色',2900,'http://127.0.0.1:3000/img/app_pms_20.jpg');

-- 创建小米商品图片表
