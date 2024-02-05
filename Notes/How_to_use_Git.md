Git是一种分布式版本控制工具。

<div class="notecard note" id="sect1">
  <p>
  <strong> Question 为什么需要git？</strong>
  <p>
  <ul>
  	<li>
		备份
		<p>类似于云盘，可以把代码放在云端存储，防止文件丢失。</p>
	</li>
	<li>
		版本控制
		<p>项目开发过程中，可能对某些内容更改之后效果不佳，想要回溯到之前的版本。</p>
	</li>
	<li>
		协同开发(最主要的原因)
		<p>很多人一起开发一个项目时，对文件修改之后需要同步到所有成员的电脑上，如果是使用文件传输或者是U盘拷贝的话非常耗费时间，且不易与管理，git可以完美的解决这个问题。	</p>
	</li>
  </ul>
  </p>
  </p>
</div>


Git是在远程服务器上有一个共享版本库，每一个开发人员的本地都有一个本地仓库，而且每个开发人员都可以`clone、pull、push`仓库。

## 1. Git的安装

### Windows系统

- 进入网址 <https://git-scm.com/download/win>
- 下载Git for windows

## 2. 创建一个本地仓库

1. 设置用户信息

```Shell
git config --global user.name <Your name>
git config --global user.email <Your email>
```

2. 创建一个文件夹

```Shell
mkdir gittest
```

3. 初始化本地仓库

```Shell
git init
```

## 3. 基础操作指令

一个Git仓库可以分为仓库(repository)、暂存区(index)、工作区(workspace)，对文件的增加删除和修改都是在工作区进行。

一个文件会有以下几种状态

- `unstaged` (未暂存) | 修改已有的文件
- `untracked` (未追踪) | 新建一个文件

可以通过指令`git add <filename>`, 将文件状态修改为`staged`(已暂存)， 这个指令实现将代码从工作区--->暂存区。

- `git commit` 暂存区-->本地仓库

常用流程

```Shell
>>> git add <filename>
>>> git commit -m "messagecommit"
>>> git log
```

- `git log [option]` 查看提交信息
 	- `--all` 显示所有信息
 	- `--pretty=oneline` 单行显示提交信息
 	- `--abbrev-commit` 使输出的commit更简短
 	- `--graph` 以图的形式显示

### 设置常用快捷键

可以添加快捷指令

```shell
alias ll='ls -a'
alias git-log=''
```

### 版本回退

- 命令

```Shell
git reset --hard <commitID>
```

怎么找到commitID呢？
使用上面的`git log --graph`, commit后面的一串字符就是commitID

- `git reflog` 可以查看历史commit

### 指定忽略文件

有些文件不想让git来管理，可以创建一个`.gitignore`文件，在文件中添加不想被管理的文件。

## 4. 分支常用指令

可以将主要程序的开发从主线上分支出来，创建出分支，最终将分支合并到主分支。

### 查看分支

```Shell
git branch
```

### 创建分支

```Shell
git branch <branch name>
```

### **切换分支(checkout)**

```shell
git checkout <branch name>
```

也可以一键创建并切换到新分支

```shell
git checkout -b <branch name>
```

### 合并分支

- `git merge <branch name>` 将某个分支合并到当前分支

### 删除分支

#### 删除分支，需要进行各种检查

```shell
git branch -d <branchname>
```

#### 删除分支，不进行各种检查

```shell
 git branch -D <branchname>
```

## 5. 解决冲突

如果在合并分支(Merge)发生了修改冲突，需要先修改冲突的文件，然后在进行add和commit即可。

## 6. 常用分支规范

- master（生产）分支
 线上分支，主分支，中小规模项目作为线上运行应用对应的分支；
- develop（开发）分支
  从master创建的分支，作为开发的主要分支，阶段开发完成后需要Merge到主分支master，准备上线；
- feature/xxxx 分支
  从develop创建的分支，一般是同期并行开发、但上线期不同的分支，分支上研发完成要合并到develop分支
- hotfix/xxxx 分支
  从master创建的分支，一般作为线上修复bug使用，bug修复完之后需要Merge到master
- 其他分支
 	- test （代码测试）
 	- pre（预上线）

# 远程仓库

- Github
- gitee

## 生成SSH公钥

```shell
ssh-keygen -t rsa
```

RSA加密算法，《数论》有介绍过，只是回忆不需要知道细节。

- 查看公钥并设置公钥
 	- `cat ~/.ssh/id_rsa.pub`

## 推送本地仓库

- 复制仓库的SSH地址
- 链接远程仓库
 	- `git remote add <远端名字> <SSH adress>`
 	- 远端名字一般使用`origin`
- 查看当前本地仓库是否关联远程仓库
 	- `git remote`
- 推送本地仓库
 	- `git push origin main` 将main分支推送到远程仓库origin

- `git push` 指令参数

```shell
git push[-f][--set-upstream][远端名称[本地分支名]:[远端分支名]]
```

- `--set-upstream` 推送到远端的同时并且建立和远端分支的关联关系
 	- `git push --set-upstream origin main:main` 将本地的main分支与云端的main分支联系起来，下次就可以直接`git push`
- `-f` 强制覆盖
- `git branch -vv` 查看当前分支与云端分支的联系

## 克隆远程仓库

```shell
git clone <SSHadress> [filename]
```

## 从仓库中抓取和拉取

- 抓取`git fetch [remote name] [branch nmae]`
 	- 将仓库的所有更新都抓取到本地，不会进行合并
 	- 需要再运行`git merge [remote name]
- 拉去`git pull`
 	- 相当如抓取+合并

### 解决合并冲突
当两个人同时更改了文件的同一行，另一个人pull时会产生冲突。

- 解决方法和本地冲突解决方法相同
