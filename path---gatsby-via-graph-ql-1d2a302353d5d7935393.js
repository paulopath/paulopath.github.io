webpackJsonp([0xd2ecdda9be6a],{"./node_modules/json-loader/index.js!./.cache/json/gatsby-via-graph-ql.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="gatsbian-markdown"><a href="#gatsbian-markdown" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gatsbian Markdown</h1>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment" spellcheck="true">// src > components > PostListing > PostListing.jsx</span>\n  <span class="token function">getPostList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> postList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>postEdges<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>postEdge <span class="token operator">=></span> <span class="token punctuation">{</span>\n      postList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> postList<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// src > pages > index.jsx</span>\n<span class="token keyword">import</span> PostListing <span class="token keyword">from</span> <span class="token string">"../components/PostListing/PostListing"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> postEdges <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>data<span class="token punctuation">.</span>allMarkdownRemark<span class="token punctuation">.</span>edges<span class="token punctuation">;</span>\n\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PostListing</span> <span class="token attr-name">postEdges</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>postEdges<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p><strong>Objectives</strong></p>\n<ul>\n<li>Understand how Gatsby handles data</li>\n<li>Understand GraphQL Templates</li>\n<li>Build a Reference List from Data Provided in Frontmatter</li>\n</ul>\n<p><strong>Source Plugins | Tools</strong></p>\n<blockquote>\n<p>Source plugins fetch data from their source. E.g. the filesystem source plugin knows how to fetch data from the file system. The Wordpress plugin knows how to fetch data from the Wordpress API.</p>\n</blockquote>\n<ul>\n<li>component-page-creator <code>___graphql</code></li>\n<li><code>gatsby-source-filesystem</code></li>\n<li><code>gatsby-transformer-remark</code></li>\n</ul>\n<p><strong>Graph<em>i</em>QL</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment" spellcheck="true">// frontmatter queries in component-page-creator</span>\n<span class="token punctuation">{</span>\n  markdownRemark <span class="token punctuation">{</span>\n    frontmatter <span class="token punctuation">{</span>\n      title\n      cover\n      date\n      category\n      _PARENT\n      parent\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  allSitePage <span class="token punctuation">{</span>\n    edges <span class="token punctuation">{</span>\n      node <span class="token punctuation">{</span>\n        context <span class="token punctuation">{</span>\n          tag\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>Resulting Query</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"markdownRemark"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"frontmatter"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"How to create a Navigation Drawer"</span><span class="token punctuation">,</span>\n        <span class="token property">"cover"</span><span class="token operator">:</span> <span class="token string">"https://unsplash.it/400/300?image=161"</span><span class="token punctuation">,</span>\n        <span class="token property">"date"</span><span class="token operator">:</span> <span class="token string">"10/06/2017"</span><span class="token punctuation">,</span>\n        <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"React Plugins"</span><span class="token punctuation">,</span>\n        <span class="token property">"_PARENT"</span><span class="token operator">:</span> <span class="token string">"D:/_practice/react/gatsby-material-starter/content/posts/navigation-drawer.md absPath of file"</span><span class="token punctuation">,</span>\n        <span class="token property">"parent"</span><span class="token operator">:</span> <span class="token string">"D:/_practice/react/gatsby-material-starter/content/posts/navigation-drawer.md absPath of file"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"filesystem"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"GraphQL type schema"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"Source Plugins"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"database API"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"Transformer Plugins"</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="parsing-algorithm-in-gatsby-transformer-remark"><a href="#parsing-algorithm-in-gatsby-transformer-remark" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Parsing Algorithm in gatsby-transformer-remark</h3>\n<ul>\n<li>\n<p>Each Markdown file is parsed into a node of type MarkdownRemark.</p>\n</li>\n<li>\n<p>All frontmatter fields are converted into GraphQL fields. TODO link to docs on auto-inferring types/fields.</p>\n</li>\n<li>\n<p>This plugin adds additional fields to the MarkdownRemark GraphQL type including html, excerpt, headers, etc. Other Gatsby plugins can also add additional fields.</p>\n</li>\n</ul>\n<h2 id="how-graphql-templates-work"><a href="#how-graphql-templates-work" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How GraphQL Templates Work</h2>\n<p>To fill a table with the relative paths for every article, along with the amount of time elapsed since their creation (i.e. <code>birthTime</code>), here is what the export statement containing a GraphQL Template looks like...</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">const</span> query <span class="token operator">=</span> graphql<span class="token template-string"><span class="token string">`\n  query MyFilesQuery {\n    allFile {\n      edges {\n        node {\n          relativePath\n          birthTime(fromNow: true)\n        }\n      }\n    }\n  }`</span></span>\n</code></pre>\n      </div>\n<p>The table can be built using standard components.  The data table component used in this example parses data via corresponding GraphQL query variables... <code>relateivePath</code>, <code>birthTime</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableBody</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>data<span class="token punctuation">.</span>allFile<span class="token punctuation">.</span>edges<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span>node<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableRow</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableColumn</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>node<span class="token punctuation">.</span>relativePath<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableColumn</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableColumn</span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>node<span class="token punctuation">.</span>birthTime<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableColumn</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableRow</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableBody</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The table components were imported from <code>react-md</code>... </p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> DataTable <span class="token keyword">from</span> <span class="token string">\'react-md/lib/DataTables/DataTable\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TableHeader <span class="token keyword">from</span> <span class="token string">\'react-md/lib/DataTables/TableHeader\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TableBody <span class="token keyword">from</span> <span class="token string">\'react-md/lib/DataTables/TableBody\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TableRow <span class="token keyword">from</span> <span class="token string">\'react-md/lib/DataTables/TableRow\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TableColumn <span class="token keyword">from</span> <span class="token string">\'react-md/lib/DataTables/TableColumn\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h1 id="notes"><a href="#notes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Notes</h1>\n<p><strong>Remark Deps</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code>// package.json\n<span class="token punctuation">{</span>\n  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"gatsby-remark-autolink-headers"</span><span class="token operator">:</span> <span class="token string">"^1.4.3"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-remark-copy-linked-files"</span><span class="token operator">:</span> <span class="token string">"^1.5.1"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-remark-images"</span><span class="token operator">:</span> <span class="token string">"^1.5.3"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-remark-prismjs"</span><span class="token operator">:</span> <span class="token string">"^1.2.0"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-remark-responsive-iframe"</span><span class="token operator">:</span> <span class="token string">"^1.4.2"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-source-filesystem"</span><span class="token operator">:</span> <span class="token string">"^1.4.2"</span><span class="token punctuation">,</span>\n    <span class="token property">"gatsby-transformer-remark"</span><span class="token operator">:</span> <span class="token string">"^1.7.0"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment" spellcheck="true">// gatsby-transformer-remark/src/on-node-create.js</span>\n  markdownNode<span class="token punctuation">.</span>frontmatter <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token comment" spellcheck="true">// title is a required field</span>\n    <span class="token operator">...</span>data<span class="token punctuation">.</span>data<span class="token punctuation">,</span>\n    _PARENT<span class="token punctuation">:</span> node<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n    parent<span class="token punctuation">:</span> node<span class="token punctuation">.</span>id<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="gatsby-plugins-configuration"><a href="#gatsby-plugins-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Gatsby Plugins Configuration</h3>\n<p><strong>gatsby-config.js</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"gatsby-plugin-react-helmet"</span><span class="token punctuation">,</span>\n    <span class="token string">"gatsby-plugin-sass"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      resolve<span class="token punctuation">:</span> <span class="token string">"gatsby-source-filesystem"</span><span class="token punctuation">,</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        name<span class="token punctuation">:</span> <span class="token string">"posts"</span><span class="token punctuation">,</span>\n        path<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/content/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>config<span class="token punctuation">.</span>blogPostDir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>The <code>path</code> variable specifies the directory name with <code>config.blogPostDir</code>, a variable in <code>/data/siteConfig.js</code>...</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  blogPostDir<span class="token punctuation">:</span> <span class="token string">"posts"</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// The name of directory that contains your posts.</span>\n  <span class="token operator">...</span><span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="graphql-ide"><a href="#graphql-ide" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GraphQL IDE</h2>\n<blockquote>\n<p>Data in Gatsby sites can come literally from anywhere: APIs, databases, CMSs, local files, etc.</p>\n</blockquote>\n<p>To illustrate how GraphQL allows you to capture data, the Gatsby plugin for parsing files within a directory is used at <code>http://localhost:8000/___graphql</code>. The returned values are then applied to a newly created <code>my-files.js</code> page, which in turn displays those values inside a table...</p>\n<h2 id="markdown-processing-ecosystem"><a href="#markdown-processing-ecosystem" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Markdown Processing EcoSystem</h2>\n<blockquote>\n<p>remark is an ecosystem of plug-ins for processing markdown. It’s not another markdown to HTML compiler. It can generate and reformat markdown too. Powered by plugins to do all kinds of things: check markdown code style, transform safely to React, add a table of contents, or compile to man pages.</p>\n</blockquote>',timeToRead:4,excerpt:"Gatsbian Markdown Objectives Understand how Gatsby handles data Understand GraphQL Templates Build a Reference List from Data Provided in…",frontmatter:{title:"Gatsby via GraphQL",cover:"https://unsplash.it/400/300?image=983",date:"2017-10-07",category:"Data Model",tags:["GraphQL type schema","Source Plugins","Transformer Plugins"]},fields:{nextTitle:"How to create a Navigation Drawer",nextSlug:"/how-to-create-a-navigation-drawer",prevTitle:"Remark API",prevSlug:"/remark-api",slug:"/gatsby-via-graph-ql"}}},pathContext:{slug:"/gatsby-via-graph-ql"}}}});
//# sourceMappingURL=path---gatsby-via-graph-ql-1d2a302353d5d7935393.js.map