## 课程资源

- CMU数据库公开课 <a href="https://15445.courses.cs.cmu.edu/fall2023/">卡内基梅隆在线课程</a>
- 数据库人大在线课程 <a href="https://www.bilibili.com/video/BV13J411J7Vu/?spm_id_from=333.337.search-card.all.click&vd_source=4be0987894a647cbab47f2ec1f41fffc">人大数据库课程</a>

### 教材和参考资料

- 《数据库系统概论》(第6版) ---- 主要教材
- Database System Concepts (Abraham Silberschatz, Henry Korth, S. Sudarshan) ---- CMU参考教材

#### 成绩组成

- 期末考试
- 平时成绩

# 1. 绪论

## 1.1 数据库系统概论

### 1.1.1 数据库的4个基本概念

1. 数据(data): 数据库中存储的基本对象。
2. 数据库
3. 数据库管理系统
4. 数据库系统

#### 数据(Data)

数据的含义称为**数据的语义**。

#### 数据库(DB)

- 数据库(database, 简称DB) 是长期存储在计算机内**有组织、可共享**的大量信息的集合。

> [! note ] 基本特征
>
> - 数据按一定的模型组织、描述和存储
> - 较小的冗余
> - 较高的数据独立性
> - 可拓展性

#### 数据库管理系统(DMS)

- 位于用户与操作系统之间的一层数据管理软件
- 计算机基础软件

> [! note ] 主要功能
>
> 1. 数据定义功能
>    - 提供数据定义语言(DDL)
>    - 定义数据库中的数据对象的组成和结构
> 2. 数据组织、存储和管理功能
>    - 分类组织、存储
>    - 确定数据存储的文件结构和存取方式
>    - 实现数据的联系
>    - 提供多种存取方法提高存取效率
> 3. 数据的操纵功能
>    - 提供数据操纵语言(DML)
>    - 实现数据库的基本操作
> 4. 数据库的事务管理和运行管理
>    - 实现与网络其他软件的通信
>    - DBS之间或与文件系统之间的交换
>    - 异构DB之间的互访和互操作

#### 数据库系统(DBS)

- 数据库
- 数据库管理系统
- 应用程序
- 开发人员

> [! note ] 数据库系统管理数据的特点
>
> - 整体数据结构化
> - 数据的共享性强，冗余度低且易于扩充
> - 数据的独立性强
>   - 物理独立性(绝对独立)
>     - 程序与数据存储的物理存储相互独立
>     - 物理存储发生改变，应用程序无需改变
>   - 逻辑独立性(相对独立) ---- DBS采用三层模式结构
>     - 用户的应用程序与数据库的逻辑结构相互独立
>     - 数据的逻辑结构改变，用户的应用程序无需改变
>   - 数据独立性由数据库管理系统的两级映射功能来保证
> - 数据由数据库管理系统统一管理和控制
>   - 数据的安全性(security)保护
>   - 数据的完整性(integrity)检查
>   - 数据的并发(concurrency)控制
>   - 数据库的恢复(recovery)


## 1.2 数据模型

**数据模型**(data model)  是对现实世界数据特征的抽象， 是现实世界的模拟。

> [! tip] 数据模型满足的要求
>
> - 能比较真实的模拟现实世界
> - 容易为人所理解
> - 便于在计算机上实现

### 1.2.1 数据建模

把现实世界的具体事物抽象、组织为某一数据库管理系统支持的数据模型。

1. 建立概念模型
   - 现实世界抽象为信息世界
2. 将概念模型转化为数据模型
   - 信息世界转化为机器世界

### 1.2.2 概念模型

概念模型用于现实世界的建模。

> [! note ] 基本要求
>
> - 较强的语义表达能力
> - 简单清晰、易于理解

#### 信息世界的基本概念

- 实体(entity)
  - 客观存在的可区分的是事物，可以是区分的人、事、物、抽象的概念和联系
- 属性(attribute)
  - 实体所具有的某一特性称为属性
  - 一个实体可以有若干个属性刻画
- 码(key)
  -  唯一标识实体的属性集称为码
- 实体型(entity type)
  - 用实体名及其属性名集合来抽象和刻画同类实体称为实体型
- 实体集(entity set)
  - 同一类型实体的集合
- 联系(relationship)
  - 现实世界的联系在信息世界中反映为实体内部的联系和实体集之间的联系
  - 实体内部的联系：实体的属性之间的联系
  - 实体之间联系：不同实体集之间的联系
  - 实体之间的联系有一对一、一对多和多对多等多种类型

#### 实体联系方法(E-R模型)

- 用E-R图描述现实世界的概念模型。

### 1.2.3 数据模型的三要素----(逻辑模型)

1. 数据结构: 对静态数据的描述
2. 数据操纵
3. 完整性约束

### 1.2.4 层次模型

层次模型是用**数形结构**表示数据模型。
数据操作：增删改查。

#### 优点

- 结构简单
- 查询效率高
- 良好的完整性约束

#### 缺点

- 很多层次不是层次结构
- 冗余性较高

### 1.2.5 网状模型

网状模型数据库采用网状模型作为数据的组织方式。


### 1.2.6 关系模型

#### 1. 关系模型的数据结构

- 关系(relation): 一个关系对应一个二维表
- 原组(tuple)
- 属性: 表中的一列。
- 域：表中某一属性的取值范围
- 分量：元组的一个属性值。
- 关系模型：对关系的描述。

**关系模型要求关系是规范化的**

关系的每一个分量必须是一个**不可分**的数据项

#### 2. 关系模型的数据操纵与完整性约束

- 数据的操作是集合操作，操作对象和操作结果都是关系
  - 查询
  - 插入
  - 删除
  - 更新
- 存取路径对用户屏蔽

#### 3. 关系模型的优缺点

1. 建立在严格的数学概念的基础上
2. 概念单一
   - 实体与实体之间联系都用关系来表示
   - 对数据的检索和更新结果也是关系
3. 关系模型的存取路径对用户屏蔽

缺点

- 存取路径对用户屏蔽，查询效率往往不如层次模型和网状模型。
- 为提高性能，必须对用户的查询请求进行优化，增加了开发数据库管理系统的难度。

### 1.2.7 其他数据模型

- 面向对象数据模型、对象关系模型
- 半结构化的XML数据模型
- 键值对(KV)数据模型
- 文档数据模型
- 图数据模型
- 时序数据模型
- 时空数据模型
- 流数据模型

## 1.3 DBS的三级模式结构

DBS的三级模式结构是数据库系统内部的体系结构。

数据库系统的**外部体系结构**分为

- 集中式结构
- 客户机/服务器
- 并行结构
- 分布式结构
- 云结构

### 1.3.1 数据库系统中模式的概念

- 型
  - 对某一类数据的结构和属性描述
- 值
  - 型的一个具体赋值

- 模式(schema)
  - 数据库中全体数据的逻辑结构和特征的描述
  - 是对型的描述，不涉及具体值
  - 反应数据的结构及联系
  - 模式是相对稳定的
- 实例(instance)
  - 模式的具体值
  - 反应数据库某一时刻的状态
  - 一个模式可以有很多实例

### 1.3.1 数据库系统的三级模式结构

#### 模式

- 数据库中全体数据的逻辑结构和数据特征
- 数据库系统模式结构的中间层 
  - 与数据存储的物理存储细节无关
  - 与应用程序相对无关
- 定义
  - 数据的逻辑结构
  - 数据之间的联系
  - 数据有关的安全性、完整性
- DBMS提供DDL来管理模式
  模式为全局的数据系统

#### 外模式(external schema)

- 外模式也称为子模式，是数据库用户能够看见和使用的局部数据的逻辑结构和特征的描述。
- 一个数据库可以有多个外模式
- 外模式的同一数据，在外模式中的结构、类型、长度、保密级别都可以不同。
- 同一外模式可以为某一用户的多个应用系统使用

#### 用途

- 保证数据库安全性
- 每个用户只能看见和访问所对应的外模式中的数据

#### 内模式(internal schema)

内模式也称为物理模式或存储模式。

- 是数据物理结构和组织方式的描述
- 是数据在数据库内部的表示方式
  - 记录的存储方式
  - 索引的组织方式(B+树或hash索引)
  - 数据是否压缩存储
  - 数据是否加密
  - 数据存储结构的规定

### 1.3.3 数据库的两级映射与数据独立性

- 保证数据的逻辑独立性
  - 模式改变时，数据库管理员对外模式/模式映像作相应改变，使外模式保持不变。

## 1.4 数据库系统的组成

- 硬件
- 软件
- 人员

### 软件平台

- 支持数据库的管理系统运行的操作系统
- 数据库管理系统
- 开发应用系统的高级语言以及编译系统
- 应用开发工具
- 为特定应用背景开发的数据库应用系统

### 人员

- 数据库管理员
- 系统分析员和数据库设计人员
- 应用程序猿
- 最终用户

#### 数据库管理员(DBA)

- 设计与定义数据库
- 帮助最终用户使用数据库
- 负责数据库的运维工作

# 2. 关系模型

## 2.1 关系模型的数据结构及形式化定义

### 2.1.1 关系

- 单一的数据结构---关系
  - 现实世界实体以及实体之间的联系均用关系表示
- 逻辑结构 -- 二维表

- 域：一组相同类型的值的集合。
- 笛卡尔积：笛卡尔积是域上的集合运算。
  - 元组:笛卡尔积中的每个元素。
  - 分量
  - 基数：一个域的所有可能取值的个数
  - 关系模型中的笛卡尔积一般没有实际意义，只有某个真子集有意义

> [! note ] 关系
> $D_1\times D_2\times\cdots D_n$的一个子集称为在域$D_1, D_2, \cdots D_n$的一个关系，表示为
> $$
> R(D_1, D_2, \ldots, D_n)
> $$

- 属性：每一列所对应的域。
- 三类关系
  - 基本关系
  - 查询关系：查询执行产生的结果对应的表
  - 视图表：由基本表或其他视图表导出的**虚表**，不存储实际属性

> [! note ] 基本关系的性质
>
> - 列是同质的
> - 不同的列可以出自同一域
>   - 其中的每一列成为一个属性
>   - 不同的属性给予不同的属性名
> - 列的顺序无所谓，列的次序可以任意交换
> - 任意两个元组的码不能相同
> - 行的顺序无所谓，行的次序可以任意交换
> - 分量必须取原子值


## 2.2 关系模式

关系的描述称为**关系模式**。
关系模式可以表示为
$$
R(U,D,DOM,F)
$$

- R:关系名
- U:组成给关系的属性名集合
- D:U中属性所来自的域
- DOM: 属性向域的映象集合
- F: 属性间数据的依赖关系集合

关系模式通常也可以简记为
$$
R(U)或R(A_1, A_2, \ldots, A_n)
$$

- R: 关系名
- $A_1, A_2, \ldots, A_n$： 属性名
- 侯选码(candidate key)：关系模式中的某个属性或一组属性的值能够唯一地标识一个元组，而他的真子集不能，则称该属性或属性组为候选码
- 全码(all-key): 关系模式中的所有属性是这个关系模型的候选码，称为全码
- 主码：若一个关系模式有多个候选码，则选定一个为主码。(<u>主码</u>通常用下划线标识)
- 主属性：所有候选码的属性称为主属性(prime attribute)

### 2.1.3 关系数据库

- 支持关系模型的数据库系统
- 在一个关系数据库中，所有时刻的关系模式的集合称为关系数据库


### 2.1.4 关系模型的存储结构

## 2.2 关系操作

- 查询: 选择、投影、连接、除、并、差、交、笛卡尔积
  - 选择、投影、并、差、笛卡尔积是五种基本操作
- 更新：插入、删除、修改

> [! note ] 操作的特点
>
> - 集合的操作方式
> - 关系操作的所有输入输出均是关系

- 关系代数语言
  - 用对关系的运算来表达查询要求
- 关系演算语言：用谓词来表达查询要求
  - 元组关系演算语言
  - 域关系演算语言
  - 结构化查询语言(Structured Query Language, SQL): 具有关系代数和关系演算的双重特点

## 2.3 关系的完整性

- 实体的完整性和参照的完整性
- 用户定义的完整性

### 2.3.1 实体完整性

**实体的完整性规则**

- 若属性A是基本关系R的主属性，则A不能取空值

### 2.3.2 参照完整性

关系间的引用关系，参照引用

> [! note ] 外码
>
> - 设F是基本关系R的一个或一个组属性，但不是关系R的码，$K_s$是基本关系S的主码。如果F与$K_s$相对应，则称F为R的外码(foreign key).
> - 基本关系R称为参照关系
> - 基本关系S称为被参照关系或目标关系
> - R和S不一定是不同的关系
> - 目标关系S的主码$K_s$


### 2.3.3 用户定义的完整性

- 满足某些业务需求的数据要求

## 2.4 关系代数

- 关系代数是一个抽象的查询语言，用关系的运算来表达查询。
- 运算对象为关系
- 结果是关系
- 关系代数运算符：集合运算符和准们的运算符

### 集合运算

#### Union

- 具有相同的目n(两个关系有n个属性)
- 相应的属性来自同一域

#### Difference

- 相同的目
- 相应属性来自同一域

#### Intersection

$$
R\cap S=\{t\in R, t\in S\}
$$

#### Cartesian production

- R: n目关系，k_1个元组
- S: m目关系，k_2个元组
- R$\times$S
  - n+m列元素
  - k_1$\times$k_2个元组

### 专门的关系运算符

R表示关系，$t\in R, t[A_i]$

#### 选择(selection)

选择又称为限制，是在关系R中满足给定条件的元组，记为
$$
\sigma_F(R)=\{t|t\in R\wedge F(t)=true\}
$$

#### 投影

关系R上的投影是从R中选择若干属性组成新的关系
$$
\Pi_A(R)=\{t[A]|r\in R\}
$$

- 结果会自动取消相同的元组


#### 连接

连接也称为$\theta$连接，指从两个关系的笛卡尔积中选取其属性间满足一定条件的元组。记作
$$
R\Join S= \{\stackrel\frown{t_r t_s}|t_r\in R \wedge t_s\in S\wedge t_r[A]\theta t_s[B] \}
$$

- A和B：分别为R和S上度数相等且可比的属性组

- 等值连接
- 自然连接

# 3. 数据库标准语言SQL


## 数据定义

### 模式定义与删除

定义模式的语句如下

```mysql
CREATE SCHEMA [<模式名>]  AUTHORIZATION <用户名>
```

>[! note ] []表示可选参数, <>表示为必须参数

如果没有指定模式名，则模式名默认为用户名。

删除模式的语句为

```mysql
DROP SCHEMA <模式名> <CASCADE|RESTRICT>
```

`CASCADE`和`RESTRICT`二者必选其一，如果选择了`CASCADE`，表示在删除该模式的同时把在该模式中定义的所有数据库对象都删除；而如果选择了`RESRTICT`，表示如果在该模式下没有任何数据对象时，才会执行删除指令，否则会拒绝执行指令。

### 定义表

SQL 使用`CREATE TABLE` 语句定义基本表
基本格式如下

```mysql
CREATE TABLE <表名> (<列名>，<数据类型>[列级完整性约束]
					[, <列名>，<数据类型>[列级完整性约束]]
					...
					[, <表级完整性约束>])
```

## 数据类型

| 数据类型                       | 含义                                                       |
| ------------------------------ | ---------------------------------------------------------- |
| CHAR(n), CHARACTER(n)          | 长度为n的字符串                                            |
| VARCHAR(n), CHARACTERVARING(n) | 最大长度为n的可变长字符串                                  |
| CLOB                           | 字符串大对象                                               |
| BLOB                           | 二进制大对象                                               |
| INT, INTEGER                   | 整数(4字节)                                                |
| SMALLINT                       | 短整型(2字节)                                              |
| BIGINT                         | 大整型(8字节)                                              |
| NUMERIC(p, d)                  | 定点数，由p位数(不包含符号和小数点)组成，小数点之后有d位数 |
| DECIMAL(p, d), DEC(p, d)       | 同NUMERIC，但是数值精度不受p和d的关系                      |
| REAL                           | 基于机器精度的单精度浮点数                                 |
| DOUBLE PRECISON                | 基于机器精度的双精度浮点数                                 |
| FLOAT(n)                       | 可选精度的浮点数，精度至少位n位数字                        |
| BOOLEAN                        | 布尔值                                                     |
| DATE                           | 日期，格式为YYYY-MM-DD                                     |
| TIME                           | 时间，格式为HH: MM: SS                                     |
| TIMESTAMP                      | 时间戳类型                                                 |
| INTERVAL                       | 时间间隔类型                                               |

### 修改基本表

SQL使用`ALTER TABLE`来修改已经定义的表

```mysql
ALTER TABLE<表名>
	[ADD[COLUMN]<新列名><数据类型>[完整性约束]]
	[ADD<表级完整性约束>]
	[DROP[COLUMN]<列名>[CASCADE|RESTRICT]]
	[DROP CONSTRAINT<完整性约束名>[CASCADE|RESTRICT]]
	[RENAME COLUMN <列名> TO <新列名>]
	[ALTER COLUMN <列名> TYPE <数据类型>];
```

### 删除基本表

```mysql
DROP TABLE <表名> [RESTRICT|CASCADE];
```

## 索引的建立与删除

当数据库的内容较多时，建立索引可以有效的加快查询效率。
常用的索引类型有

- 顺序表
- B+树索引
- 哈希索引
- 位图索引

### 建立索引

SQL中使用语句`CREATE INDEX `语句建立索引

```mysql
CREATE[UNIQUE][CLUSTER]INDEX <索引名>
ON <表名>(<列名>[次序][, <列名>[<次序>]]...)
```

索引可以建立在表的一列或者多列上，列之间用逗号隔开。每个列名后面可以指定排列次序，
可选`ASC`(升序排列)或者`DESC`(降序排列), 默认为`ASC`。

### 修改索引

对于已经建立的索引，可以使用语句`ALTER INDEX`语句对其重命名，其用法如下

```mysql
ALTER INDEX <旧索引名> RENAME TO <新索引名>;
```

### 删除索引

如果表中数据的查询频率比较小，反而增删改的频率比较大，则每次修改都需要维护已经建立的索引，从而影响效率，就需要删除索引。

```mysql
DROP INDEX <索引名>;
```

## 数据查询

数据查询的基本语法如下

```mysql
SELECT [ALL|DISTINCT] <目标列表达式> [别名][, <目标列表达式>[别名]]...
FROM <表名或视图名>[别名][, <表名或视图名>[别名]] ... | (<SELECT语句>[AS]<别名>)
[WHERE <条件表达式>]
[GROUP BY <列名1>[HAVING <条件表达式>]]
[ORDER BY <列名2>[ASC|DESC]]
[LIMIT <行数1>[ OFFSET <行数2>]];
```

### 基本查询

```Mysql
SELECT * FROM <表名>
```

`SELECT`是关键字，* 表示所有列，`FROM`表示 从哪个表来查询
以下语法可以去除重复的行，默认情况下`SELECT`等价于`SELECT ALL`, 会保留所有的行

```mysql
SELECT DISTINCT * FROM <表名>
```

### 条件查询

```mysql
SELECT * FROM <表名> WHERE <条件表达式>
```

条件表达式可以表示为`<条件1> AND <条件2>`

- 使用`<>`判断不相等
  - Example：score <> 80, name <> 'abc'
- 使用`LIKE`判断相似
  - Example: `name LIKE 'ab%'`, `name LIKE '%bc%'`
  - % 为通配符，匹配任意字符， 例如`ab%`匹配'ab', 'abc', 'abcd'

| 比较               | =, >, <, >=, <=, !=, <>, !>, !<; NOT+上述比较符 |
| ------------------ | ----------------------------------------------- |
| 确定范围           | BETWEEN AND, NOT BETWEEN AND                    |
| 确定集合           | IN, NOT IN                                      |
| 字符匹配           | LIKE, NOT LIKE                                  |
| 空值               | IS NULL, IS NOT NULL                            |
| 多重条件(逻辑运算) | AND, OR, NOT                                    |

### 投影查询

```mysql
SELECT id, score, name FROM students;
```

```mysql
SELECT id, score points, name FROM students;
```

将列名`score`重命名为`points`。

使用投影查询的同时也可以使用条件查询

```mysql
SELECT id, score points, name FROM students WHERE gender = 'M';
```

### 排序

当我们使用`SELECT`查询时，查询结果通常默认按照`id`也就是主值进行排序，但是也可以我们指定其排序方式。

```mysql
SELECT id, name, gender, score FROM students ORDER BY score;
```

默认是按照由小到大进行排序，如果要从大到排列，可以使用`DESC`

```mysql
SELECT id, name, gender, score FROM students ORDER BY score DESC;
```

如果`score`列具有相同的数据，则可以再指定排序的列名，如

```mysql
SELECT id, name, gender, score FROM students ORDER BY score DESC, gender;
```

排序的默认规则为升序排列，为`ASC`，可以省略。
如果排序和选择排序混合使用，即如果句子中有`WHERE`，则`ORDER BY`需要放在`WHERE`之后。

```mysql
SELECT id, name, gender, score
FROM students
WHERE class_id = 1
ORDER BY score DESC;
```

### 聚合查询

聚集函数

- `COUNT(*)` -- 统计元组的个数
- `COUNT([DISTINCT|ALL]<列名>)` -- 统计一列中值的个数
- `SUM([DISTINCT|ALL]<列名>)` -- 计算一列值的总和
- `AVG([DISTINCT|ALL]<列名>)` -- 计算一列值的平均值
- `MAX([DISTINCT|ALL]<列名>)` -- 求一列值中的最大值
- `MIN([DISTINCT|ALL]<列名>)` -- 求一列值中的最小值

> [! attention] WHERE 子句不能直接用聚集函数作为条件表达式。聚集函数只能用于`SELECT`子句和`GROUP BY`子句中的`HAVING`短语。

#### GROUP BY子句

GROUP BY子句将查询结果按查询的**某一列或多列的值分组**，值相等的为一组。
对查询结果分组的主要目的是细化聚集函数的作用对象，分组之后每组都对应着一个聚集函数值。

#### LIMIT子句

LIMIT子句用于限制SELECT语句查询结果的数量，一般形式为

```sql
LIMIT <行数1> [OFFSET<行数2>];
```

上述语句含义为取<行数1>, 忽略前<行数2>行，作为查询结果数据。`OFFSET`为可选参数。
**Example** 查询平均成绩排名在第3-7名的学生的学号和平均成绩

```sql
SELECT Sno, AVG(Grade)
FROM SC
GROUP BY Sno
ORDER BY AVG(Grade) DESC
LIMIT 5 OFFSET 2;
```

### 连接查询

#### 等值连接查询和非等值连接查询

使用运算符"="的连接查询称为等值连接查询，使用其他运算符的连接查询称为非等值连接查询。
**连接字段**：连接谓词中的列名称为连接字段。

#### 自然连接查询

把查询结果中重复的属性列去掉的等值连接查询称为**自然连接查询**

**Example**查询每个学生的学号、姓名、性别、出生日期、主修专业及该学生选修课程的课程号与成绩

```sql
SELECT Student.Sno, Sname, Ssex, Sbirthday, Smajor, Cno, Grade
FROM Student, SC
WHERE Student.Sno = SC.Sno;
```

#### 复合条件连接查询

`WHERE`的子句是由连接谓词和选择谓词组成的复合条件。
**Example** 查询选修81002号课程且成绩在90分以上的所有学生的学号和姓名

```SQL
SELECT Student.Sno, Sname
FROM Student, SC
WHERE Student.Sno = SC.Sno AND SC.Cno='81002' AND SC.Grade > 90
```

#### 自身连接查询

连接操作将一个表自身与自身连接，称为自身连接查询。
**Example** 查询每一门课的**间接**先修课

```sql
SELECT FIRST.Cno, SECOND.Cpno
FROM Course FIRST, Course SECOND
WHERE FIRST.Cpno = SECOND.Cno AND SECOND.Cpno IS NOT NULL;
```

#### 外连接查询

为了保留悬空元组，需要利用外连接查询

```sql
SELECT Student.Sno, Sname, Ssex, Sbirthday, Smajor, Cno, Grade
FROM Student LEFT OUTER JOIN SC ON (Student.Sno = SC.Sno);
```

左外连接查询列出FROM左边关系的所有元组，右外连接查询列出FROM右边关系的所有元组。

#### 多表连接查询

大于两个表连接查询称为 **多表连接查询**。
**Example** 查询每个学生的学号、姓名、选修的课程名及成绩

```SQL
SELECT Student.Sno, Sname, Cname, Grade
FROM Student, SC, Course
WHERE Student.Sno = SC.Sno AND SC.Cno = Course.Cno;
```

### 嵌套查询

SQL中一个SELECT-FROM-WHERE称为一个 **查询块**，将一个查询块嵌入到另一个查询块的WHERE或者HAVING语句的条件中称为**嵌套查询**(nested query)。
上层查询称为 **外层查询或者父查询**，下层查询称为 **内层查询或者子查询**。

> [! Attention ] 子查询的SELECT语句中不能使用ORDER BY子句，只能对最终的结果进行排序操作。

- 子查询的查询条件不依赖于父查询，这类子查询称为**不相关子查询**。
- 子查询的查询条件依赖于父查询，这类子查询称为**相关子查询**，整个语句称为**相关嵌套语句**。

**Example** 找出每个学生超过他自己选修课程平均成绩的课程号

```sql
SELECT Sno, Cno
FROM SC x
WHERE Grade >= (SELECT AVG(Grade)
			    FROM SC y
			    WHERE y.Sno = x.Sno);
```

```SQL
SELECT Sno, Cno
FROM SC x
WHERE Grade >= (SELECT AVG(Grade)
			    FROM SC y
			    WHERE x.Cno = y.Cno);
```

#### 带有ANY(SOME)和ALL谓词的子查询

- > ANY 大于查询结果的某个值

- > ALL  大于查询结果的所有值

- = ANY 等于子查询的结果的某个值

- = ALL 等于查询结果中的所有值

- != ALL 不等于查询结果的某个值

- != ANY 不等于查询结果的任何值

ANY、ALL谓词与聚集函数、IN谓词的等价转换关系

| 谓词 |  =   | <>或者!= | <    | <=    | >    | >=    |
| :--: | :--: | :------: | ---- | ----- | ---- | ----- |
| ANY  |  IN  |    --    | <MAX | <=MAX | >MIN | >=MIN |
| ALL  |  --  |  NOT IN  | <MIN | <=MIN | >MAX | >=MAX |

#### 带有EXISTS谓词的子查询

EXISTS表示逻辑$\exists$, 这个谓词不返回任何数据，只返回布尔值。

**Examle**查询选修了81001号课程的学生姓名

```sql
SELECT Sname 
FROM Student
WHERE EXISTS
		(SELECT *
     FROM SC
     WHERE Sno = Student.Sno AND Cno='81001'
    );
```

SQL中不存在全称量词(for all)，但是可以利用存在量词取反实现，即
$$
!\exists 等价于 \forall !
$$


**Example** 查询选修了全部课程的学生姓名

```sql	
SELECT Sname
FROM Student
WHERE NOT EXISTS
	(SELECT *
   FROM Course 
   WHERE NOT EXISTS
   (SELECT *
    FROM SC
    WHERE SC.Cno = Course.Cno AND SC.Sno = Student.Sno
   )
  );
```



**Example** 查询至少选修了学生20180002选修的全部课程的学生的学号

```sql	
SELECT Sno 
FROM Student
WHERE NOT EXISTS
	(SELECT *
   FROM SC SCX
   WHERE SCX.Sno='20180002' AND NOT EXISTS
   (SELECT *
    FROM SCY SC
    WHERE SCY.Sno=Student.Sno AND SCY.Cno=SCX.Cno
   ));
```



### 集合查询

注：参与集合查询的查询结果的列数必须相同，对应数据类型也必须相同。

集合操作主要包含UNIN， INTERSECTION， EXCEPT操作。

### 基于派生表的查询

子查询也可以出现在FROM子句中，这时子查询生成 **临时派生表**。

**Example** 

```sql	
SELECT Sname
FROM Student, (SELECT Sno FROM SC WHERE Cno='81001') AS SC1
WHERE Student.Sno=SC1.sno;
```

AS 可以省略，但是必须有一个别名。


## 数据更新

### 插入数据

插入数据使用INSERT语法，通常分为两种形式，一种为插入一个元组，另一种为插入子查询的结果。

#### 插入一个元组

```sql
INSERT INTO <表名> [(<属性列1>, [<属性列2>], ...)]
Values (<常量1>[, <常量2>]...);
```

#### 插入子查询的结果

```sql
INSERT INTO <表名> [(<属性列1>[, <属性列2>...])]
子查询;
```

**Example** 对每个专业求学生的平均年龄，并把结果存入数据库

1. 创建表

```sql
CREATE TABLE Smajor_age
(
Smajor VARCHAR(20),
Avg_age SMALLINT
);
```

2. 利用子查询插入数据

```sql
INSERT INTO Smajor_age
SELECT Smajor, AVG(extract(year from current_date) - extract(year from Sbirthdate))
FROM Student
Group By Smajor;
```

### 修改数据

修改数据就是我们经常所说的“增删改查”中的‘改’，其一般表达式为

```sql
UPDATE <表名>
SET <列名> = <表达式>[, <列名>=<表达式>]...
[WHERE <条件>];
```

其功能为修改满足WHERE条件的元组，WHERE可省略，代表修改所有元组。

#### 修改多个元组的值

**Example** 将2020年第一学期选修81002课程的所有学生成绩减少5分

```sql
UPDATE SC
SET Grade=Grade-5
WHERE Cno='81002' AND Semester='20201';
```

#### 带有子查询的修改语句

**Example** 将计算机科学技术专业同学的成绩置0

```mysql
UPDATE SC
SET Grade=0
WHERE Sno IN 
	(
	SELECT Sno
	FROM Student
	WHERE Smajor='计算机科学与技术'
	);
```

## 删除数据

删除语句的一般格式为

```sql
DELETE FROM <表名>
[WHERE <条件>];
```

**Example** 删除一个元组的值

```sql
DELETE FROM Student
WHERE Sno='20180007';
```

**Example** 删除多个元组

```sql
DELETE FROM SC;
```

此语句删除了所有的选课记录.

**Example** 带有子查询的删除: 删除计算机科学与技术所有学生的选课记录

```sql
DELETE FROM SC
WHERE Sno IN 
	(
	SELECT Sno
	FROM Student
	WHERE Smajor='计算机科学与技术'
	);
```

## 处理空值NULL

空值就是"不知道""不存在"或"无意义"的值。SQL中的空值有以下几种情况

- 该属性应该有一个值，但当前不知道
- 该属性不应该有值
- 由于某种原因不便与填写， 如涉及隐私的信息

### 空值的判断

判断一个属性是否为空值，使用`IS NULL` 和 `IS NOT NULL`语句
**Example** 从Student表中找出漏填了数据的学生信息

```sql
SELECT *
FROM Student
WHERE Sname IS NULL OR Ssex IS NULL OR Sbirthdate IS NULL OR Smajor IS NULL;
```

由于主码不可能为空值，故`Sno`无需判断。

### 空值约束

- 如果在创建基本表时，属性定义为`NOT NULL`约束， 则不可以取空值。
- 主码不可以取空值。

### 空值的运算

- 空值与任何数值进行计算的结果都为NULL
- 空值与另一个值的比较运算结果为UNKNOWN
  加入了UNKONOW后的三值逻辑运算真值表

| x    | y    | x AND y | x OR y | NOT x |      |
| ---- | ---- | ------- | ------ | ----- | ---- |
| T    | T    | T       | T      | F     |      |
| T    | U    | U       | T      | F     |      |
| T    | F    | F       | T      | F     |      |
| U    | T    | U       | T      | U     |      |
| U    | U    | U       | U      | U     |      |
| U    | F    | F       | U      | U     |      |
| F    | T    | F       | T      | T     |      |
| F    | F    | F       | F      | T     |      |
| F    | U    | F       | U      | T     |      |
|      |      |         |        |       |      |

## 视图

### 定义视图

创建视图的基本语法为

```sql	
CREATE VIEW <视图名>[(<列名>[, <列名>]...)]
AS <子查询>
[WITH CHECK OPTION];
```

子查询为任意包含SELECT的语句

`WITH CHECK OPTION` 表示对视图进行`UPDATE`、`INSERT` 和`DELETE`时要保证更新、插入、或删除的行满足视图定义中的谓词条件。

组成视图的属性列名只能**全部省略**或者**全部指定**，以下情况必须明确指定所有的列名

- 某个目标不是单纯的属性名，而是聚集函数或者表达式
- 多表连接时出现了几个同名列作为视图的字段
- 需要在视图中为某个列启用新的名字



**Example** 建立信息管理与信息系统专业学生的视图

```sql	
CREATE VIEW IS_Student
AS 
SELECT Sno, Sname, Ssex, Sbirthdate, Smajor
FROM Student
WHERE Smajor='信息管理与信息系统';
```

`CREATE VIEW`执行时，**只是把视图的定义存入数据字典**，并不执行`SELECT`语句。只有对视图查询时，才会按照视图表的定义从基本表中查询。

**Example** 建立信息管理与信息系统专业学生的视图, 且保证在插入数据时，视图中仍然只有信息管理与信息系统的学生

```sql	
CREATE VIEW IS_Student
AS 
SELECT Sno, Sname, Ssex, Sbirthdate, Smajor
FROM Student
WHERE Smajor='信息管理与信息系统'
WITH CHECK OPTION;
```

**行列子集视图**: 若一个视图从单个基本表导出，并且只是去掉了基本表的某些列和某些行，但保留了主码。

**Example** (由多个表创建视图) 建立信息管理与信息系统专业选修81001号课程的学生的视图(包含学号、姓名、成绩属性)

```sql	
CREATE VIEW IS_C1(Sno, Sname, Grade)
AS
SELECT Student.Sno, Sname, Grade
FROM Student, SC
WHERE Student.Sno=SC.Sno AND SC.Cno='81001' Smajor="信息管理与信息系统";
```

**Example** (在已有视图的基础上创建视图) 建立信息管理与信息系统专业选修了81001课程且成绩在90分以上的学生视图

```sql	
CREATE VIEW IS_C2
AS
SELECT Sno, Sname, Grade
FROM IS_C1
WHERE Grade>90;
```

**虚拟列**:由其他列经过计算所得出的列，系统不存储其数值，而是经过计算得出。

- 带虚拟列的视图称为带表达式的视图

**Example** 将学生的学号姓名年龄定义为一个视图

```sql	
CREATE S_AGE(Sno, Sname, Sage)
AS
SELECT Sno, Sname, (extract(year from current_date)-extract(year from Sbirthdate))
FROM Student;
```

**！最好在修改基本表的结构之后删除由该表导出的视图，然后重建这些视图**

### 删除视图

删除视图的基本语句为

```sql	
DROP VIEW <视图名>[CASCADE];
```

视图删除后其定义将从数据字典中删除，如果该视图还导出了其他视图，则需要使用`CASCADE`级联删除语句将其一并删除。

### 查询视图

视图定义之后就可以像基本表一样对视图进行查询。

#### 视图消解(view resolution)

关系数据库管理系统在执行对视图的查询时, 进行完有效性查询之后，从数据字典中取出视图的定义，把定义中的子查询和用户的查询结合起来，转化为等价的基本表的查询，这一过程称为视图消解。

注: 定义视图之后对视图查询和直接对派生表查询还是有区别的。视图一旦定义，该视图保存在数据字典里，之后所有的查询都可以引用该视图(类似于函数), 但是派生表只是在语句执行时临时定义的，语句结束之后就被删除。



## 更新视图

由于视图不是实际存储数据的**虚表**，因此对视图的更新最终都会转化为**对基本表的更新**。

**Example** 将视图IS_Student中的2018005号学生的姓名改为"刘新奇"

```sql	
UPDATE IS_Student
SET Sname='刘新奇'
WHERE Sno='2018005';
```

对其视图消解之后所对应的SQL语句为

```sql	
UPDATE Student
SET Sname='刘新奇'
WHERE Sno='2018005' AND Smajor='信息管理与信息系统';
```



**Example** 向视图IS_Student中插入一个新的学生记录(2018207, 赵新, 男, 2001-7-19)

```sql	
INSERT INTO IS_Student
VALUES('2018207', '赵新', '男', '2001-7-19', '信息管理与信息系统');
```



**某些视图是无法更新的，例如视图中的某些列是由其他基本表属性计算而来的**

一般行列子集视图是可更新的

## 视图的作用

1. 视图能够为机密数据提供安全保护
2. 视图为重构数据库提供了一定程度的逻辑独立性
3. 视图可以简化用户的操作
4. 视图可以使用户能以多种角度看待同一数据





# 4. 数据库安全性

**数据库的安全性**: 指保护数据库，以防不合法使用 所造成的数据泄露、篡改或破坏。



# 5. 数据库的完整性

# 6. 关系数据理论

# 7. 数据库设计

# 8. 数据库编程

# 9. 关系数据库存储管理

# 10. 关系查询处理和查询优化

# 11. 数据库恢复技术

# 12. 并发控制

# 13. 数据库管理系统