> title:OSI七层模型和TCP/IP四层模型概述
> date:2017/11/26 12:31:26

### 前言:
本文分别介绍 TCP/IP 四层模型和 OSI 七层模型的概念，对应关系，每层含义以及两者的区别。在了解两者相关概念前，先看看两者之间的对应关系，如下图所示：
!['banner'](https://raw.githubusercontent.com/yshunda/Notes/master/images/TCPIPOSI.png)

### OSI七层模型
OSI模型，即开放式通信系统互联参考模型(Open System Interconnection,OSI/RM,Open Systems Interconnection Reference Model)，是国际标准化组织(ISO)提出的一个试图使各种计算机在世界范围内互连为网络的标准框架，简称OSI。

`
        在制定计算机网络标准方面，起着重大作用的两大国际组织是：国际电信联盟电信标准化部门（CCITT），与国际标准组织（ISO），虽然它们工作领域不同，但随着科学技术的发展，通信与信息处理之间的界限开始变得比较模糊，这也成了CCITT和ISO共同关心的领域。1983年，ISO发布了著名的ISO/IEC 7498标准，它定义了网络互联的7层框架，也就是开放式系统互联参考模型。
`
#### 应用层
应用层（Application Layer）提供为应用软件而设的界面，以设置与另一应用软件之间的通信。例如: HTTP，HTTPS，FTP，TELNET，SSH，SMTP，POP3等。
#### 表示层
表示层（Presentation Layer）把数据转换为能与接收者的系统格式兼容并适合传输的格式。
#### 会话层
会话层（Session Layer）负责在数据传输中设置和维护电脑网络中两台电脑之间的通信连接。
#### 传输层
传输层（Transport Layer）把传输表头（TH）加至数据以形成数据包。传输表头包含了所使用的协议等发送信息。例如:传输控制协议（TCP）等。
#### 网络层
网络层（Network Layer）决定数据的路径选择和转寄，将网络表头（NH）加至数据包，以形成分组。网络表头包含了网络数据。例如:互联网协议（IP）等。
#### 数据链层
数据链路层（Data Link Layer）负责网络寻址、错误侦测和改错。当表头和表尾被加至数据包时，会形成帧。数据链表头（DLH）是包含了物理地址和错误侦测及改错的方法。数据链表尾（DLT）是一串指示数据包末端的字符串。例如以太网、无线局域网（Wi-Fi）和通用分组无线服务（GPRS）等。
分为两个子层：逻辑链路控制（logic link control，LLC）子层和介质访问控制（media access control，MAC）子层。
#### 物理层
物理层（Physical Layer）在局部局域网上传送帧，它负责管理电脑通信设备和网络媒体之间的互通。包括了针脚、电压、线缆规范、集线器、中继器、网卡、主机适配器等
