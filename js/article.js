let vm_title = new Vue(
    {
        el: "#title",
        data: {
            title: "test"
        }
    }
);
let vm_article = new Vue({
    el: "#article",
    data: {
        title: "test",
        kind: "技术",
        date: "2022-9-25",
        content:
            "<h2>数楼梯 <em>P1255</em></h2>\n" +
            "<h3>1. 确定状态</h3>\n" +
            "<p>到第n个台阶的可能走法\n" +
            "记为 <code>dp[n]</code></p>\n" +
            "<pre><code class=\"language-c++\">int dp[5005]={0};//with compile option -std=c++11\n" +
            "</code></pre>\n" +
            "<h3>2. 划分阶段</h3>\n" +
            "<p>每个上一个台阶可单独为一个阶段，阶段从1到n线性划分，符合线性DP</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n;i ++)\n" +
            "{\n" +
            "    //决策\n" +
            "}\n" +
            "</code></pre>\n" +
            "<h3>3. 决策选择</h3>\n" +
            "<p>到达第i个台阶有两种走法，从i-1到i或者从i-2到i故到i的走法等于到两个台阶的走法之和，即</p>\n" +
            "<p>$$dp[i]=dp[i-1]+dp[i-2]$$</p>\n" +
            "<pre><code class=\"language-c++\">dp[i]=dp[i-1]+dp[i-2];//状态转移方程\n" +
            "</code></pre>\n" +
            "<h3>4. 边界条件</h3>\n" +
            "<p>到第一个台阶有1种走法，到第二个台阶有2种走法，故</p>\n" +
            "<pre><code class=\"language-c++\">if(n&lt;=2)\n" +
            "{\n" +
            "    cout &lt;&lt; n;//#include&lt;iostream&gt;;using namespace std;\n" +
            "    return 0;\n" +
            "}\n" +
            "dp[1]=1;\n" +
            "dp[2]=2;\n" +
            "</code></pre>\n" +
            "<h3>5. 求解目标</h3>\n" +
            "<p>本题目标为到n的方法数，与状态意义相同，可直接使用状态返回</p>\n" +
            "<pre><code class=\"language-c++\">cout &lt;&lt; dp[n];\n" +
            "</code></pre>\n" +
            "<h3>注意</h3>\n" +
            "<ul>\n" +
            "<li>本题数据规模较大，使用int得50分，使用long long得60分，必须使用高精度运算。</li>\n" +
            "</ul>\n" +
            "<pre><code class=\"language-c++\">//定义结构体存一个int数组，从0开始表示从最低位开始的一个数字\n" +
            "struct num\n" +
            "{\n" +
            "    int number[1500] = {0};\n" +
            "};\n" +
            "\n" +
            "//重载+运算符便于计算\n" +
            "num operator+(num x,num y)\n" +
            "{\n" +
            "    num z;\n" +
            "    //相加\n" +
            "    for(int i = 0;i &lt; 1500;i ++)\n" +
            "    {\n" +
            "        z.number[i]=x.number[i]+y.number[i];\n" +
            "    }\n" +
            "    //计算贡献\n" +
            "    for(int i = 0;i &lt; 1499;i ++)\n" +
            "    {\n" +
            "        z.number[i+1]+=z.number[i]/10;\n" +
            "        z.number[i]=z.number[i]%10;\n" +
            "    }\n" +
            "    return z;\n" +
            "}\n" +
            "//从最高位打印\n" +
            "void print(num x)\n" +
            "{\n" +
            "    int flag = 0;\n" +
            "    for(int i = 1499;i &gt;= 0;i --)\n" +
            "    {\n" +
            "        if(x.number[i]!=0) flag = 1;\n" +
            "        if(flag!=0) cout &lt;&lt; x.number[i];\n" +
            "    }\n" +
            "}\n" +
            "</code></pre>\n" +
            "<ul>\n" +
            "<li>使用高精度内存占用大，用一个较大数字算得当n等于5000时，结果是一个1045位数，故使用了1500位的数组存数据</li>\n" +
            "</ul>\n" +
            "<h3>优化</h3>\n" +
            "<p>每次动态转移仅使用到前两个状态，故可只存储前两个状态而不必完全存储</p>\n" +
            "<pre><code class=\"language-c++\">num ans,a,b;\n" +
            "a.number[0]=1;\n" +
            "b.number[0]=2;//a,b首先存储n=1,2的状态，后续从阶段3开始转移\n" +
            "for(int i = 3;i &lt;= n;i ++)\n" +
            "{\n" +
            "    ans=a+b;\n" +
            "    if(i%2==1) a=ans; else b=ans;//控制每次更新a,b中小的一个为新的值\n" +
            "}\n" +
            "</code></pre>\n" +
            "<p>内存由29.04MB优化为808.00KB</p>\n" +
            "<h2>数字三角形 Number Triangles <em>P1216</em></h2>\n" +
            "<h3>1. 确定状态</h3>\n" +
            "<p>到达点i,j的最大路径大小\n" +
            "记为<code>dp[i][j]</code></p>\n" +
            "<h3>2. 划分阶段</h3>\n" +
            "<p>三角形的每一层，即<code>dp[n][n]</code>的每一行可视为一个阶段，从1到n线性排列</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n; i++)\n" +
            "    {\n" +
            "        for(int j = 1; j &lt;= i;j ++)\n" +
            "        {\n" +
            "            //状态转移\n" +
            "        }\n" +
            "    }\n" +
            "</code></pre>\n" +
            "<h3>3. 决策选择</h3>\n" +
            "<p>到达每个点的路径可能来自上一层与自己相邻的两个点中的一个，故<code>dp[i][j]=max(dp[i-1][j-1],dp[i-1],dp[j])+a[i][j]</code>\n" +
            "但是当该点处于某一层的边缘时，到达该点的路径只有一条，故完整动态转移方程可写为</p>\n" +
            "<p>$$\n" +
            "dp[i][j] =\n" +
            "\\begin{cases}\n" +
            "dp[i-1][1]+b,j=1\\\n" +
            "max(dp[i-1][j-1],dp[i-1][j])+b,j\\neq 1且j\\neq i\\\n" +
            "dp[i-1][j-1]+b,j=i\n" +
            "\\end{cases}\n" +
            "$$</p>\n" +
            "<pre><code class=\"language-c++\">//状态转移方程\n" +
            "if(j==1) dp[i][1]=dp[i-1][1]+b; else//b表示点(i,j)的值\n" +
            "if(j==i) dp[i][j]=dp[i-1][j-1]+b; else\n" +
            "dp[i][j]=max(dp[i-1][j-1],dp[i-1][j])+b;\n" +
            "</code></pre>\n" +
            "<h3>4. 边界条件</h3>\n" +
            "<p>转移方程中涉及到i-1可能等于0超出我们的范围，需要进行特判\n" +
            "对于第一行第一个点，其路径就只有它本身，故其路径大小等于它本身的值\n" +
            "即</p>\n" +
            "<pre><code class=\"language-c++\">dp[1][1]=b;\n" +
            "</code></pre>\n" +
            "<p>同时更改外层for循环从i=2开始循环</p>\n" +
            "<h3>5. 求解目标</h3>\n" +
            "<p>本题求解目标为从最底层到最高层的最短路径，故需要找出底层所有点的最大路径值</p>\n" +
            "<pre><code class=\"language-c++\">int ans = dp[n][1];\n" +
            "for(int i = 2; i&lt;= n;i ++) ans=max(dp[n][i],ans);\n" +
            "cout &lt;&lt; ans;\n" +
            "</code></pre>\n" +
            "<h2>最长上升子序列 <em>B3637</em></h2>\n" +
            "<h3>1. 确定状态</h3>\n" +
            "<p>从1到n的最长上升子序列长度\n" +
            "记为<code>dp[n]</code></p>\n" +
            "<h3>2. 划分阶段</h3>\n" +
            "<p>求解每个到达每个点的最长上升子序列均可视为一个阶段，符合线性排列，可以从第二个开始求解\n" +
            "记为</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 2; i&lt;= n;i ++)\n" +
            "{\n" +
            "    //状态转移\n" +
            "}\n" +
            "</code></pre>\n" +
            "<h3>3. 决策选择</h3>\n" +
            "<p>对于每一个点，它的最长上升子序列可能来自所有比它小的，且位置在它前面的点，我们要取其中最长的，故状态转移</p>\n" +
            "<p>$$\n" +
            "dp[i]=max(dp[i],dp[j+1]),i&gt;j\n" +
            "$$</p>\n" +
            "<pre><code class=\"language-c++\">dp[i]=1;//保证dp[i]初始值不大于前面每个点的最长上升子序列\n" +
            "for(int j = 1; j &lt; i;j ++)//遍历前面每一个点\n" +
            "{\n" +
            "    //状态转移方程\n" +
            "    if(a[i]&gt;a[j])dp[i]=max(dp[i],dp[j]+1);//如果满足条件，就进行状态转移\n" +
            "}\n" +
            "</code></pre>\n" +
            "<h3>4. 边界条件</h3>\n" +
            "<p>由于在决策中采用了将<code>dp[i]</code>初值设为1的做法,当i=1时，即首个状态，状态转移将不会被执行，dp[1]将保持为1，故可以以此处理边界条件并将最外层循环设置为从1开始</p>\n" +
            "<h3>5. 求解目标</h3>\n" +
            "<p>本题要找最大上升子序列，即找dp[i]中的最大值，故可存储一个最大值并在每个阶段结束进行比较以得出最终结果</p>\n" +
            "<pre><code class=\"language-c++\">int ans = 0;\n" +
            "for(int i = 1; i&lt;= n;i ++)\n" +
            "{\n" +
            "    dp[i]=1;\n" +
            "    for(int j = 1; j &lt; i;j ++)\n" +
            "    {\n" +
            "        if(a[i]&gt;a[j])dp[i]=max(dp[i],dp[j]+1);\n" +
            "    }\n" +
            "    ans = max(dp[i],ans);\n" +
            "    cout &lt;&lt; ans;\n" +
            "}\n" +
            "</code></pre>\n" +
            "<h3>注意</h3>\n" +
            "<ul>\n" +
            "<li>此DP算法时间复杂度为两层循环O(n^2^)较大，可能会出现TLE的情况，可以使用贪心进一步优化</li>\n" +
            "</ul>\n" +
            "<h3>优化</h3>\n" +
            "<p>我们可以认为，越小的数字组合得到的子序列越大，故可以在状态转移的过程中记录下最小上升子序列，当读取下一阶段的数时，如果该数字大于记录序列的最后一个，则将其加入序列，ans++，否则寻找序列大于等于该数字的最后一个数字，在不改变ans的情况下将其替换。此时该序列后面部分任保留着之前的最小上升子序列，在下一个阶段的决策过程中不会产生影响，当后面部分被新的序列完全替换时，说明新的序列比旧序列更小，新序列将一定会大于等于旧序列，最终将找出最大上升子序列</p>\n" +
            "<pre><code class=\"language-c++\">b[1]=a[1];//边界条件：子序列初始化为原序列第一个元素，ans即子序列长度为1\n" +
            "int ans = 1;\n" +
            "for(int i = 1;i &lt;=n;i ++)\n" +
            "{\n" +
            "    if(b[ans]&lt;a[i])\n" +
            "    {\n" +
            "        b[ans+1]=a[i];\n" +
            "        ans++;\n" +
            "    }else if(b[ans]&gt;a[i])//省去==时查找的时间（==时实际上不做任何操作）\n" +
            "    {\n" +
            "        *lower_bound(b+1,b+ans+1,a[i])=a[i];\n" +
            "        //返回指向从b+1指向区域到b+ans+1（不含）指向区域的大于等于a[i]的最小值的指针\n" +
            "    }\n" +
            "}\n" +
            "</code></pre>\n" +
            "<p>该算法时间复杂度为O(nlogn)</p>\n" +
            "<h3>【模板】最长公共子序列 <em>P1439</em></h3>\n" +
            "<h3>1. 确定状态</h3>\n" +
            "<p>第一个序列的1-i与第二个序列的1-j构成的最长公共子序列长度为<code>dp[i][j]</code></p>\n" +
            "<h3>2. 划分阶段</h3>\n" +
            "<p>对第一个序列中从1到i的最长公共子序列求解的过程可视为一个阶段，阶段由1到n线性排列，阶段中将对第二个序列中的每个子序列进行决策</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n;i ++) for(int j = 1;j &lt;= i;j++)\n" +
            "{\n" +
            "    //状态转移\n" +
            "}\n" +
            "</code></pre>\n" +
            "<h3>3. 决策选择</h3>\n" +
            "<p>对于每对子序列i,j,如果两个序列尾相等，则<code>dp[i][j]=dp[i-1][j-1]+1</code>，即该公共子序列可以从前一个公共子序列中得出，否则<code>dp[i][j]=max(dp[i-1][j],dp[i][j-1])</code></p>\n" +
            "<p>$$\n" +
            "dp[i][j]={\n" +
            "\\begin{cases}\n" +
            "{dp[i-1][j-1],a[i]=b[j]}\\\n" +
            "{max(dp[i-1][j],dp[i][j-1]),a[i]\\neq b[j]}\n" +
            "\\end{cases}\n" +
            "}\n" +
            "$$</p>\n" +
            "<pre><code class=\"language-c++\">//状态转移方程\n" +
            "if(a[i]==b[j])//a[n],b[n]表示两个原序列\n" +
            "{\n" +
            "    dp[i][j]=dp[i-1][j-1]+1;\n" +
            "}else{\n" +
            "    dp[i][j] = max(dp[i-1][j],dp[i][j-1]);\n" +
            "}\n" +
            "</code></pre>\n" +
            "<h3>4. 边界条件</h3>\n" +
            "<p>在状态转移过程中使用到了<code>i-1</code>,<code>j-1</code>，可能为0，需将其设为0，以使每个阶段从0开始计数</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n;i ++) dp[0][i]=dp[i][0]=0;\n" +
            "</code></pre>\n" +
            "<h3>5. 求解目标</h3>\n" +
            "<p>本题求两个序列的最长公共子序列，与状态含义相同，可直接输出</p>\n" +
            "<pre><code class=\"language-c++\">cout &lt;&lt; dp[n][n];\n" +
            "</code></pre>\n" +
            "<h3>注意</h3>\n" +
            "<ul>\n" +
            "<li>纯DP做法空间复杂度为O(n^2^ ),n&lt;=10^5^,MLE</li>\n" +
            "<li>纯DP做法时间复杂度也为O(n^2^ )，TLE</li>\n" +
            "</ul>\n" +
            "<h3>优化</h3>\n" +
            "<p>我们发现，在状态转移中实际上使用到的状态只有2行，故可以只存2行状态</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n;i ++) dp[1][n]=0;//设置边界条件\n" +
            "dp[1][0]=dp[2][0]=0;\n" +
            "for(int i = 1;i &lt;= n;i ++) {//仍然要循环每个阶段\n" +
            "    for(int j = 1;j &lt;= n;j++)\n" +
            "    {\n" +
            "        if(a[i]==b[j])\n" +
            "        {\n" +
            "            dp[2][j]=dp[1][j-1]+1;\n" +
            "        }else{\n" +
            "           dp[2][j] = max(dp[1][j],dp[2][j-1]);\n" +
            "        }\n" +
            "    }\n" +
            "    for(int i = 1;i &lt;= n;i ++)dp[1][i]=dp[2][i];\n" +
            "}\n" +
            "cout &lt;&lt; dp[1][n];\n" +
            "</code></pre>\n" +
            "<p>发现只能得50分，代码由MLE转为TLE\n" +
            "继续根据贪心优化\n" +
            "分析发现，在公共子序列中，子序列在两个序列中的位次构成的序列都是严格上升的\n" +
            "故该问题可以转化为将两个序列中重复的内容对应于两个序列的次位取出，然后求让这两个序列都是上升序列的最大长度\n" +
            "进一步可以转化为按其中一个序列的次位取出重复元素基于另一个序列的次位组成一个新的序列，此时该序列对应后者的元素在前者的次位是严格上升的，我们只需考虑后者的次位，即求后者的最大上升子序列</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n;i ++)//循环取出前一个序列中的元素\n" +
            "{\n" +
            "    int flag=find(b,b+n+1,a[i])-b;//查找从b到b+n+1(不包含)区间中a[i]的位置并计算为b中的位次\n" +
            "    if(flag!=n+1)//如果b中存在a[i]，即find函数结果不为b+n+1\n" +
            "    {\n" +
            "        //按照上题求最长上升子序列的方法，c存储最长上升子序列\n" +
            "        if(flag&gt;c[ans]){\n" +
            "            ans++;\n" +
            "            c[ans]=flag;\n" +
            "        }else{\n" +
            "            *lower_bound(c+1,c+ans+1,flag)=flag;\n" +
            "        }\n" +
            "    }\n" +
            "}\n" +
            "</code></pre>\n" +
            "<p>该算法时间复杂度仍为O(n^2^)，但比纯DP做法减少不少运算，能得60分，仍然TLE\n" +
            "继续分析发现，find函数查找过程花费最多n的时间，而序列中元素最大值不超过10^5^，可以牺牲部分可用范围内的空间，直接使用数组下标表示存储两个序列中重复部分，省去find的时间</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n; i++) {cin &gt;&gt; a[i];f_a[a[i]]=1;};//f_a用于标记a中的元素\n" +
            "for(int i = 1;i &lt;= n; i++) {cin &gt;&gt; b[i];if(f_a[b[i]]!=0) f[b[i]]=i;};//f用于存储公共元素在b中的位次\n" +
            "int ans = 1;\n" +
            "int c[100005];\n" +
            "c[1]=n;\n" +
            "for(int i = 1;i &lt;= n;i ++)\n" +
            "{\n" +
            "    int flag=f[a[i]];//更新flag为a[i]在b中的位次\n" +
            "    if(flag!=0)//如果flag!=0，即a[i]是公共元素\n" +
            "    {\n" +
            "        if(flag&gt;c[ans]){\n" +
            "            ans++;\n" +
            "            c[ans]=flag;\n" +
            "        }else{\n" +
            "            *lower_bound(c+1,c+ans+1,flag)=flag;\n" +
            "        }\n" +
            "    }\n" +
            "}\n" +
            "</code></pre>\n" +
            "<p>该算法时间复杂度为O(n^2^)，最终可以达到AC</p>\n" +
            "<h2>最大子段和 <em>P1115</em></h2>\n" +
            "<h3>1. 确定状态</h3>\n" +
            "<p>使用<code>dp[i]</code>表示以第i个结尾的最大连续子段和</p>\n" +
            "<h3>2. 划分阶段</h3>\n" +
            "<p>对每个元素结尾的最大连续子段和求解均可视为一个阶段，共n个阶段线性排列</p>\n" +
            "<pre><code class=\"language-c++\">for(int i = 1;i &lt;= n;i ++)\n" +
            "{\n" +
            "    //动态转移\n" +
            "}\n" +
            "</code></pre>\n" +
            "<h3>3. 决策选择</h3>\n" +
            "<p>对于每个元素，其最大连续子段和等于前一个元素最大连续子段和加上自身或自己本身，即</p>\n" +
            "<p>$${dp[i]=\n" +
            "max({dp[i]+a[i]},{a[i]})\n" +
            "}$$</p>\n" +
            "<pre><code class=\"language-c++\">dp[i]=max(dp[i-1]+a[i],a[i]);//状态转移方程\n" +
            "</code></pre>\n" +
            "<p>很容易发现，以上决策取决于<code>dp[i-1]</code>的正负，故动态转移方程也可写为</p>\n" +
            "<p>$${dp[i]=\n" +
            "\\begin{cases}\n" +
            "{dp[i]+a[i]},dp[i-1]\\geq0\\\n" +
            "{dp[i]},dp[i-1]&lt;0\n" +
            "\\end{cases}\n" +
            "}$$</p>\n" +
            "<pre><code class=\"language-c++\">if(dp[i-1]&gt;=0) dp[i]=dp[i]+a[i];\n" +
            "else dp[i]=a[i];\n" +
            "</code></pre>\n" +
            "<h3>4. 边界条件</h3>\n" +
            "<p>第一个元素的最大连续子段为其自身，可以对<code>dp[1]</code>进行初始化</p>\n" +
            "<pre><code class=\"language-c++\">dp[1]=a[1];\n" +
            "</code></pre>\n" +
            "<p>且添加边界条件后阶段循环可以从2开始</p>\n" +
            "<h3>5. 求解目标</h3>\n" +
            "<p>本题需要求解整个序列的最大连续子序列，故需要遍历所有状态求出最大值\n" +
            "可将比较放入每个阶段中</p>\n" +
            "<pre><code class=\"language-c++\">int ans = dp[1];\n" +
            "for(int i = 2;i &lt;= n;i ++)\n" +
            "{\n" +
            "    if(dp[i-1]&gt;=0) dp[i]=dp[i]+a[i];\n" +
            "    else dp[i]=a[i];\n" +
            "    ans=max(ans,dp[i]);\n" +
            "}\n" +
            "cout &lt;&lt; ans;\n" +
            "</code></pre>\n" +
            "<h3>优化</h3>\n" +
            "<p>每个状态转移时都只用到后面的元素，与前面的无关，可以利用这一点将原序列直接存在dp[n]中，减少内存开销</p>\n" +
            "<pre><code class=\"language-c++\">int ans = dp[1];\n" +
            "for(int i = 2;i &lt;= n;i ++)\n" +
            "{\n" +
            "    if(dp[i-1]&gt;=0) dp[i]+=dp[i-1];//小于0时dp[i]即为i元素的值，故无须更新\n" +
            "    ans=max(ans,dp[i]);\n" +
            "}\n" +
            "cout &lt;&lt; ans;\n" +
            "</code></pre>\n"
    }
})

window.onload = function () {
    $("mjx-container").css("display", "inline");
    const s = skrollr.init(
        {
            forceHeight: false
        }
    );
}