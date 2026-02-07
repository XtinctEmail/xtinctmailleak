(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,719820,e=>{"use strict";function t(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var a=t(),r={exec:()=>null};function s(e,t=""){let a="string"==typeof e?e:e.source,r={replace:(e,t)=>{let s="string"==typeof t?t:t.source;return s=s.replace(l.caret,"$1"),a=a.replace(e,s),r},getRegex:()=>new RegExp(a,t)};return r}var n=(()=>{try{return!!RegExp("(?<=1)(?<!1)")}catch{return!1}})(),l={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},i=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,o=/(?:[*+-]|\d{1,9}[.)])/,c=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,h=s(c).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),d=s(c).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),p=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,u=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,_=s(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",u).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),g=s(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,o).getRegex(),m="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",k=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,f=s("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",k).replace("tag",m).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b=s(p).replace("hr",i).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m).getRegex(),x={blockquote:s(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",b).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:_,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:i,html:f,lheading:h,list:g,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:b,table:r,text:/^[^\n]+/},w=s("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",i).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m).getRegex(),S={...x,lheading:d,table:w,paragraph:s(p).replace("hr",i).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",w).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",m).getRegex()},E={...x,html:s(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",k).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:r,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:s(p).replace("hr",i).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},R=/^( {2,}|\\)\n(?!\s*$)/,$=/[\p{P}\p{S}]/u,T=/[\s\p{P}\p{S}]/u,A=/[^\s\p{P}\p{S}]/u,y=s(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,T).getRegex(),L=/(?!~)[\p{P}\p{S}]/u,O=s(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",n?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),N=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,C=s(N,"u").replace(/punct/g,$).getRegex(),I=s(N,"u").replace(/punct/g,L).getRegex(),M="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",D=s(M,"gu").replace(/notPunctSpace/g,A).replace(/punctSpace/g,T).replace(/punct/g,$).getRegex(),q=s(M,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,L).getRegex(),v=s("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,A).replace(/punctSpace/g,T).replace(/punct/g,$).getRegex(),F=s(/\\(punct)/,"gu").replace(/punct/g,$).getRegex(),z=s(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),P=s(k).replace("(?:-->|$)","-->").getRegex(),B=s("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",P).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Y=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,U=s(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Y).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),j=s(/^!?\[(label)\]\[(ref)\]/).replace("label",Y).replace("ref",u).getRegex(),H=s(/^!?\[(ref)\](?:\[\])?/).replace("ref",u).getRegex(),X=s("reflink|nolink(?!\\()","g").replace("reflink",j).replace("nolink",H).getRegex(),W=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Z={_backpedal:r,anyPunctuation:F,autolink:z,blockSkip:O,br:R,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:r,emStrongLDelim:C,emStrongRDelimAst:D,emStrongRDelimUnd:v,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:U,nolink:H,punctuation:y,reflink:j,reflinkSearch:X,tag:B,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:r},G={...Z,link:s(/^!?\[(label)\]\((.*?)\)/).replace("label",Y).getRegex(),reflink:s(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Y).getRegex()},Q={...Z,emStrongRDelimAst:q,emStrongLDelim:I,url:s(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",W).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:s(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",W).getRegex()},J={...Q,br:s(R).replace("{2,}","*").getRegex(),text:s(Q.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},V={normal:x,gfm:S,pedantic:E},K={normal:Z,gfm:Q,breaks:J,pedantic:G},ee={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},et=e=>ee[e];function ea(e,t){if(t){if(l.escapeTest.test(e))return e.replace(l.escapeReplace,et)}else if(l.escapeTestNoEncode.test(e))return e.replace(l.escapeReplaceNoEncode,et);return e}function er(e){try{e=encodeURI(e).replace(l.percentDecode,"%")}catch{return null}return e}function es(e,t){let a=e.replace(l.findPipe,(e,t,a)=>{let r=!1,s=t;for(;--s>=0&&"\\"===a[s];)r=!r;return r?"|":" |"}).split(l.splitPipe),r=0;if(a[0].trim()||a.shift(),a.length>0&&!a.at(-1)?.trim()&&a.pop(),t)if(a.length>t)a.splice(t);else for(;a.length<t;)a.push("");for(;r<a.length;r++)a[r]=a[r].trim().replace(l.slashPipe,"|");return a}function en(e,t,a){let r=e.length;if(0===r)return"";let s=0;for(;s<r;){let n=e.charAt(r-s-1);if(n!==t||a)if(n!==t&&a)s++;else break;else s++}return e.slice(0,r-s)}function el(e,t,a,r,s){let n=t.href,l=t.title||null,i=e[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;let o={type:"!"===e[0].charAt(0)?"image":"link",raw:a,href:n,title:l,text:i,tokens:r.inlineTokens(i)};return r.state.inLink=!1,o}var ei=class{options;rules;lexer;constructor(e){this.options=e||a}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:en(e,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],a=function(e,t,a){let r=e.match(a.other.indentCodeCompensation);if(null===r)return t;let s=r[1];return t.split(`
`).map(e=>{let t=e.match(a.other.beginningSpace);if(null===t)return e;let[r]=t;return r.length>=s.length?e.slice(s.length):e}).join(`
`)}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:a}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=en(e,"#");(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:en(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=en(t[0],`
`).split(`
`),a="",r="",s=[];for(;e.length>0;){let t=!1,n=[],l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))n.push(e[l]),t=!0;else if(t)break;else n.push(e[l]);e=e.slice(l);let i=n.join(`
`),o=i.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");a=a?`${a}
${i}`:i,r=r?`${r}
${o}`:o;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(o,s,!0),this.lexer.state.top=c,0===e.length)break;let h=s.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let t=h.raw+`
`+e.join(`
`),n=this.blockquote(t);s[s.length-1]=n,a=a.substring(0,a.length-h.raw.length)+n.raw,r=r.substring(0,r.length-h.text.length)+n.text;break}if(h?.type==="list"){let t=h.raw+`
`+e.join(`
`),n=this.list(t);s[s.length-1]=n,a=a.substring(0,a.length-h.raw.length)+n.raw,r=r.substring(0,r.length-h.raw.length)+n.raw,e=t.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:a,tokens:s,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let a=t[1].trim(),r=a.length>1,s={type:"list",raw:"",ordered:r,start:r?+a.slice(0,-1):"",loose:!1,items:[]};a=r?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=r?a:"[*+-]");let n=this.rules.other.listItemRegex(a),l=!1;for(;e;){let a=!1,r="",i="";if(!(t=n.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let o=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,e=>" ".repeat(3*e.length)),c=e.split(`
`,1)[0],h=!o.trim(),d=0;if(this.options.pedantic?(d=2,i=o.trimStart()):h?d=t[1].length+1:(d=(d=t[2].search(this.rules.other.nonSpaceChar))>4?1:d,i=o.slice(d),d+=t[1].length),h&&this.rules.other.blankLine.test(c)&&(r+=c+`
`,e=e.substring(c.length+1),a=!0),!a){let t=this.rules.other.nextBulletRegex(d),a=this.rules.other.hrRegex(d),s=this.rules.other.fencesBeginRegex(d),n=this.rules.other.headingBeginRegex(d),l=this.rules.other.htmlBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],u;if(c=p,u=this.options.pedantic?c=c.replace(this.rules.other.listReplaceNesting,"  "):c.replace(this.rules.other.tabCharGlobal,"    "),s.test(c)||n.test(c)||l.test(c)||t.test(c)||a.test(c))break;if(u.search(this.rules.other.nonSpaceChar)>=d||!c.trim())i+=`
`+u.slice(d);else{if(h||o.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||s.test(o)||n.test(o)||a.test(o))break;i+=`
`+c}h||c.trim()||(h=!0),r+=p+`
`,e=e.substring(p.length+1),o=u.slice(d)}}s.loose||(l?s.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(l=!0)),s.items.push({type:"list_item",raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(i),loose:!1,text:i,tokens:[]}),s.raw+=r}let i=s.items.at(-1);if(!i)return;for(let e of(i.raw=i.raw.trimEnd(),i.text=i.text.trimEnd(),s.raw=s.raw.trimEnd(),s.items)){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,""),e.tokens[0]?.type==="text"||e.tokens[0]?.type==="paragraph"){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,""),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,"");for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,"");break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let a={type:"checkbox",raw:t[0]+" ",checked:"[ ]"!==t[0]};e.checked=a.checked,s.loose?e.tokens[0]&&["paragraph","text"].includes(e.tokens[0].type)&&"tokens"in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=a.raw+e.tokens[0].raw,e.tokens[0].text=a.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(a)):e.tokens.unshift({type:"paragraph",raw:a.raw,text:a.raw,tokens:[a]}):e.tokens.unshift(a)}}if(!s.loose){let t=e.tokens.filter(e=>"space"===e.type);s.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(s.loose)for(let e of s.items)for(let t of(e.loose=!0,e.tokens))"text"===t.type&&(t.type="paragraph");return s}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),a=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:a,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let a=es(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],n={type:"table",raw:t[0],header:[],align:[],rows:[]};if(a.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?n.align.push("right"):this.rules.other.tableAlignCenter.test(e)?n.align.push("center"):this.rules.other.tableAlignLeft.test(e)?n.align.push("left"):n.align.push(null);for(let e=0;e<a.length;e++)n.header.push({text:a[e],tokens:this.lexer.inline(a[e]),header:!0,align:n.align[e]});for(let e of s)n.rows.push(es(e,n.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:n.align[t]})));return n}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=en(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let a=0;for(let t=0;t<e.length;t++)if("\\"===e[t])t++;else if("("===e[t])a++;else if(")"===e[t]&&--a<0)return t;return a>0?-2:-1}(t[2],0);if(-2===e)return;if(e>-1){let a=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let a=t[2],r="";if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(a);e&&(a=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):"";return a=a.trim(),this.rules.other.startAngleBracket.test(a)&&(a=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?a.slice(1):a.slice(1,-1)),el(t,{href:a&&a.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let a;if((a=this.rules.inline.reflink.exec(e))||(a=this.rules.inline.nolink.exec(e))){let e=t[(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){let e=a[0].charAt(0);return{type:"text",raw:e,text:e}}return el(a,e,a[0],this.lexer,this.rules)}}emStrong(e,t,a=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||r[3]&&a.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[2])||!a||this.rules.inline.punctuation.exec(a))){let a=[...r[0]].length-1,s,n,l=a,i=0,o="*"===r[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(o.lastIndex=0,t=t.slice(-1*e.length+a);null!=(r=o.exec(t));){if(!(s=r[1]||r[2]||r[3]||r[4]||r[5]||r[6]))continue;if(n=[...s].length,r[3]||r[4]){l+=n;continue}if((r[5]||r[6])&&a%3&&!((a+n)%3)){i+=n;continue}if((l-=n)>0)continue;n=Math.min(n,n+l+i);let t=[...r[0]][0].length,o=e.slice(0,a+r.index+t+n);if(Math.min(a,n)%2){let e=o.slice(1,-1);return{type:"em",raw:o,text:e,tokens:this.lexer.inlineTokens(e)}}let c=o.slice(2,-2);return{type:"strong",raw:o,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," "),a=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return a&&r&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,a;return a="@"===t[2]?"mailto:"+(e=t[1]):e=t[1],{type:"link",raw:t[0],text:e,href:a,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,a;if("@"===t[2])a="mailto:"+(e=t[0]);else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(r!==t[0])e=t[0],a="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:a,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}},eo=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||a,this.options.tokenizer=this.options.tokenizer||new ei,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:l,block:V.normal,inline:K.normal};this.options.pedantic?(t.block=V.pedantic,t.inline=K.pedantic):this.options.gfm&&(t.block=V.gfm,this.options.breaks?t.inline=K.breaks:t.inline=K.gfm),this.tokenizer.rules=t}static get rules(){return{block:V,inline:K}}static lex(t,a){return new e(a).lex(t)}static lexInline(t,a){return new e(a).inlineTokens(t)}lex(e){e=e.replace(l.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],a=!1){for(this.options.pedantic&&(e=e.replace(l.tabCharGlobal,"    ").replace(l.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(a=>!!(r=a.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let a=t.at(-1);1===r.raw.length&&void 0!==a?a.raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.at(-1).src=a.text):t.push(r);continue}if((r=this.tokenizer.fences(e))||(r=this.tokenizer.heading(e))||(r=this.tokenizer.hr(e))||(r=this.tokenizer.blockquote(e))||(r=this.tokenizer.list(e))||(r=this.tokenizer.html(e))){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let a=t.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title},t.push(r));continue}if((r=this.tokenizer.table(e))||(r=this.tokenizer.lheading(e))){e=e.substring(r.raw.length),t.push(r);continue}let s=e;if(this.options.extensions?.startBlock){let t=1/0,a=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{"number"==typeof(r=e.call({lexer:this},a))&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){let n=t.at(-1);a&&n?.type==="paragraph"?(n.raw+=(n.raw.endsWith(`
`)?"":`
`)+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(r),a=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let a=t.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+r.raw,a.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):t.push(r);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let a,r=e,s=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(r));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.anyPunctuation.exec(r));)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(r));)a=s[2]?s[2].length:0,r=r.slice(0,s.index+a)+"["+"a".repeat(s[0].length-a-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let n=!1,l="";for(;e;){let a;if(n||(l=""),n=!1,this.options.extensions?.inline?.some(r=>!!(a=r.call({lexer:this},e,t))&&(e=e.substring(a.raw.length),t.push(a),!0)))continue;if((a=this.tokenizer.escape(e))||(a=this.tokenizer.tag(e))||(a=this.tokenizer.link(e))){e=e.substring(a.raw.length),t.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let r=t.at(-1);"text"===a.type&&r?.type==="text"?(r.raw+=a.raw,r.text+=a.text):t.push(a);continue}if((a=this.tokenizer.emStrong(e,r,l))||(a=this.tokenizer.codespan(e))||(a=this.tokenizer.br(e))||(a=this.tokenizer.del(e))||(a=this.tokenizer.autolink(e))||!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),t.push(a);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,a=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{"number"==typeof(r=e.call({lexer:this},a))&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(a=this.tokenizer.inlineText(s)){e=e.substring(a.raw.length),"_"!==a.raw.slice(-1)&&(l=a.raw.slice(-1)),n=!0;let r=t.at(-1);r?.type==="text"?(r.raw+=a.raw,r.text+=a.text):t.push(a);continue}if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}return t}},ec=class{options;parser;constructor(e){this.options=e||a}space(e){return""}code({text:e,lang:t,escaped:a}){let r=(t||"").match(l.notSpaceStart)?.[0],s=e.replace(l.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ea(r)+'">'+(a?s:ea(s,!0))+`</code></pre>
`:"<pre><code>"+(a?s:ea(s,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,a=e.start,r="";for(let t=0;t<e.items.length;t++){let a=e.items[t];r+=this.listitem(a)}let s=t?"ol":"ul";return"<"+s+(t&&1!==a?' start="'+a+'"':"")+`>
`+r+"</"+s+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",a="";for(let t=0;t<e.header.length;t++)a+=this.tablecell(e.header[t]);t+=this.tablerow({text:a});let r="";for(let t=0;t<e.rows.length;t++){let s=e.rows[t];a="";for(let e=0;e<s.length;e++)a+=this.tablecell(s[e]);r+=this.tablerow({text:a})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),a=e.header?"th":"td";return(e.align?`<${a} align="${e.align}">`:`<${a}>`)+t+`</${a}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${ea(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:a}){let r=this.parser.parseInline(a),s=er(e);if(null===s)return r;let n='<a href="'+(e=s)+'"';return t&&(n+=' title="'+ea(t)+'"'),n+=">"+r+"</a>"}image({href:e,title:t,text:a,tokens:r}){r&&(a=this.parser.parseInline(r,this.parser.textRenderer));let s=er(e);if(null===s)return ea(a);e=s;let n=`<img src="${e}" alt="${a}"`;return t&&(n+=` title="${ea(t)}"`),n+=">"}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:ea(e.text)}},eh=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},ed=class e{options;renderer;textRenderer;constructor(e){this.options=e||a,this.options.renderer=this.options.renderer||new ec,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new eh}static parse(t,a){return new e(a).parse(t)}static parseInline(t,a){return new e(a).parseInline(t)}parse(e){let t="";for(let a=0;a<e.length;a++){let r=e[a];if(this.options.extensions?.renderers?.[r.type]){let e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(r.type)){t+=e||"";continue}}switch(r.type){case"space":t+=this.renderer.space(r);break;case"hr":t+=this.renderer.hr(r);break;case"heading":t+=this.renderer.heading(r);break;case"code":t+=this.renderer.code(r);break;case"table":t+=this.renderer.table(r);break;case"blockquote":t+=this.renderer.blockquote(r);break;case"list":t+=this.renderer.list(r);break;case"checkbox":t+=this.renderer.checkbox(r);break;case"html":t+=this.renderer.html(r);break;case"def":t+=this.renderer.def(r);break;case"paragraph":t+=this.renderer.paragraph(r);break;case"text":t+=this.renderer.text(r);break;default:{let e='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return t}parseInline(e,t=this.renderer){let a="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let e=this.options.extensions.renderers[s.type].call({parser:this},s);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){a+=e||"";continue}}switch(s.type){case"escape":case"text":a+=t.text(s);break;case"html":a+=t.html(s);break;case"link":a+=t.link(s);break;case"image":a+=t.image(s);break;case"checkbox":a+=t.checkbox(s);break;case"strong":a+=t.strong(s);break;case"em":a+=t.em(s);break;case"codespan":a+=t.codespan(s);break;case"br":a+=t.br(s);break;case"del":a+=t.del(s);break;default:{let e='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw Error(e)}}}return a}},ep=class{options;block;constructor(e){this.options=e||a}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(){return this.block?eo.lex:eo.lexInline}provideParser(){return this.block?ed.parse:ed.parseInline}},eu=new class{defaults=t();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ed;Renderer=ec;TextRenderer=eh;Lexer=eo;Tokenizer=ei;Hooks=ep;constructor(...e){this.use(...e)}walkTokens(e,t){let a=[];for(let r of e)switch(a=a.concat(t.call(this,r)),r.type){case"table":for(let e of r.header)a=a.concat(this.walkTokens(e.tokens,t));for(let e of r.rows)for(let r of e)a=a.concat(this.walkTokens(r.tokens,t));break;case"list":a=a.concat(this.walkTokens(r.items,t));break;default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let s=e[r].flat(1/0);a=a.concat(this.walkTokens(s,t))}):e.tokens&&(a=a.concat(this.walkTokens(e.tokens,t)))}}return a}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let a={...e};if(a.async=this.defaults.async||a.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if("renderer"in e){let a=t.renderers[e.name];a?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return!1===r&&(r=a.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");let a=t[e.level];a?a.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),a.extensions=t),e.renderer){let t=this.defaults.renderer||new ec(this.defaults);for(let a in e.renderer){if(!(a in t))throw Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;let r=e.renderer[a],s=t[a];t[a]=(...e)=>{let a=r.apply(t,e);return!1===a&&(a=s.apply(t,e)),a||""}}a.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new ei(this.defaults);for(let a in e.tokenizer){if(!(a in t))throw Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;let r=e.tokenizer[a],s=t[a];t[a]=(...e)=>{let a=r.apply(t,e);return!1===a&&(a=s.apply(t,e)),a}}a.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new ep;for(let a in e.hooks){if(!(a in t))throw Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;let r=e.hooks[a],s=t[a];ep.passThroughHooks.has(a)?t[a]=e=>{if(this.defaults.async&&ep.passThroughHooksRespectAsync.has(a))return(async()=>{let a=await r.call(t,e);return s.call(t,a)})();let n=r.call(t,e);return s.call(t,n)}:t[a]=(...e)=>{if(this.defaults.async)return(async()=>{let a=await r.apply(t,e);return!1===a&&(a=await s.apply(t,e)),a})();let a=r.apply(t,e);return!1===a&&(a=s.apply(t,e)),a}}a.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;a.walkTokens=function(e){let a=[];return a.push(r.call(this,e)),t&&(a=a.concat(t.call(this,e))),a}}this.defaults={...this.defaults,...a}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return eo.lex(e,t??this.defaults)}parser(e,t){return ed.parse(e,t??this.defaults)}parseMarkdown(e){return(t,a)=>{let r={...a},s={...this.defaults,...r},n=this.onError(!!s.silent,!!s.async);if(!0===this.defaults.async&&!1===r.async)return n(Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||null===t)return n(Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return n(Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(s.hooks&&(s.hooks.options=s,s.hooks.block=e),s.async)return(async()=>{let a=s.hooks?await s.hooks.preprocess(t):t,r=await (s.hooks?await s.hooks.provideLexer():e?eo.lex:eo.lexInline)(a,s),n=s.hooks?await s.hooks.processAllTokens(r):r;s.walkTokens&&await Promise.all(this.walkTokens(n,s.walkTokens));let l=await (s.hooks?await s.hooks.provideParser():e?ed.parse:ed.parseInline)(n,s);return s.hooks?await s.hooks.postprocess(l):l})().catch(n);try{s.hooks&&(t=s.hooks.preprocess(t));let a=(s.hooks?s.hooks.provideLexer():e?eo.lex:eo.lexInline)(t,s);s.hooks&&(a=s.hooks.processAllTokens(a)),s.walkTokens&&this.walkTokens(a,s.walkTokens);let r=(s.hooks?s.hooks.provideParser():e?ed.parse:ed.parseInline)(a,s);return s.hooks&&(r=s.hooks.postprocess(r)),r}catch(e){return n(e)}}}onError(e,t){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e="<p>An error occurred:</p><pre>"+ea(a.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(a);throw a}}};function e_(e,t){return eu.parse(e,t)}e_.options=e_.setOptions=function(e){return eu.setOptions(e),e_.defaults=eu.defaults,a=e_.defaults,e_},e_.getDefaults=t,e_.defaults=a,e_.use=function(...e){return eu.use(...e),e_.defaults=eu.defaults,a=e_.defaults,e_},e_.walkTokens=function(e,t){return eu.walkTokens(e,t)},e_.parseInline=eu.parseInline,e_.Parser=ed,e_.parser=ed.parse,e_.Renderer=ec,e_.TextRenderer=eh,e_.Lexer=eo,e_.lexer=eo.lex,e_.Tokenizer=ei,e_.Hooks=ep,e_.parse=e_,e_.options,e_.setOptions,e_.use,e_.walkTokens,e_.parseInline,ed.parse,eo.lex;var eg=e.i(701178),em=e.i(108896),ek=e.i(647163),ef=e.i(767959),eb=e.i(592323);let ex="2019-08-15",ew=(0,eg.unstable_cache)(async()=>(await em.readSql`SELECT id FROM release_batches WHERE released_at IS NOT NULL`).map(e=>e.id),["released-batch-ids"],{revalidate:3600,tags:["release-batches"]}),eS=(0,eg.unstable_cache)(async()=>(await em.readSql`SELECT id, name FROM release_batches WHERE released_at IS NOT NULL ORDER BY id`).map(e=>({id:e.id,name:e.name})),["released-batch-names"],{revalidate:3600,tags:["release-batches"]}),eE={all:null,gmail:"original",yahoo:"yahoo_2",doj:null};function eR(e){return"doj"===e}function e$(e){let t=(0,ek.parseEmailString)(e.sender),a=new Date(e.sent_at?e.sent_at:0),r=2026===a.getFullYear(),s=e.content_markdown||e.preview_text||"";return{id:e.id,doc_id:e.doc_id,message_index:e.message_index||0,sender:e.sender,sender_name:t.name,sender_email:t.email,sender_first_name:t.firstName,subject:e.subject||"(no subject)",to_recipients:e.to_recipients||[],cc_recipients:e.cc_recipients||[],bcc_recipients:e.bcc_recipients||[],sent_at:e.sent_at,content_markdown:e.content_markdown||"",content_html:e.content_html&&e.content_html.trim()?e.content_html:e.content_markdown?e_(e.content_markdown):"",attachments:e.attachments||0,formatted_date:(0,ek.formatDate)(a,r),formatted_time:(0,ek.formatTime)(a),preview:s.substring(0,100).replace(/\n/g," ").replace(/[*_#`]/g,""),avatar_color:(0,ek.getAvatarColor)(e.sender||"unknown"),account_email:e.account_email||"jeevacation@gmail.com",email_drop_id:e.email_drop_id||"original",is_from_epstein:!0===e.epstein_is_sender}}function eT(e,t){let a=t.sort((e,t)=>new Date(e.sent_at).getTime()-new Date(t.sent_at).getTime()),r=a[a.length-1],s=(0,ek.parseEmailString)(r.sender),n=a.some(e=>e.sender_email===e.account_email);return{doc_id:e,messages:a,count:a.length,subject:r.subject,latest_sender:r.sender,latest_sender_name:s.name,latest_sender_first_name:s.firstName,latest_sender_email:s.email,latest_date:r.sent_at,formatted_date:r.formatted_date,formatted_time:r.formatted_time,preview:r.preview,attachments:Math.max(...a.map(e=>e.attachments)),participants:[...new Set(a.map(e=>e.sender))],avatar_color:r.avatar_color,isSent:n,starCount:0}}function eA(e,t,a=!1){let r=`thread-${e}-${t||"all"}-${a}`;return(0,eg.unstable_cache)(async()=>{let r=t?eE[t]:null,s=em.readSql``;if(!a){let e=await ew();if(0===e.length)return null;s=em.readSql`AND release_batch = ANY(${e})`}let n=eR(t)?await em.readSql`
            SELECT * FROM emails
            WHERE doc_id = ${e} AND email_drop_id LIKE 'VOL%' ${s}
            ORDER BY sent_at ASC
          `:r?await em.readSql`
            SELECT * FROM emails
            WHERE doc_id = ${e} AND email_drop_id = ${r} ${s}
            ORDER BY sent_at ASC
          `:await em.readSql`
            SELECT * FROM emails
            WHERE doc_id = ${e} ${s}
            ORDER BY sent_at ASC
          `;return n&&0!==n.length?eT(e,n.map(e$)):null},[r],{revalidate:3600,tags:["threads"]})()}function ey(e,t="all",a=!1,r=!1){let s=`thread-preview-${e}-${t}-${a}-${r}`;return(0,eg.unstable_cache)(async()=>{let s=t?eE[t]:null,n=em.readSql``;if(!r){let e=await ew();if(0===e.length)return null;let t=a?"2099-12-31":ex;n=em.readSql`AND release_batch = ANY(${e}) AND (email_drop_id != 'yahoo_2' OR sent_at <= ${t})`}let l=eR(t)?await em.readSql`
            SELECT
              id,
              doc_id,
              sender,
              subject,
              sent_at,
              attachments,
              email_drop_id,
              account_email,
              LEFT(content_markdown, 4000) as content_markdown,
              LEFT(content_html, 4000) as content_html
            FROM emails
            WHERE doc_id = ${e} AND email_drop_id LIKE 'VOL%' ${n}
            ORDER BY sent_at DESC
            LIMIT 3
          `:s?await em.readSql`
            SELECT
              id,
              doc_id,
              sender,
              subject,
              sent_at,
              attachments,
              email_drop_id,
              account_email,
              LEFT(content_markdown, 4000) as content_markdown,
              LEFT(content_html, 4000) as content_html
            FROM emails
            WHERE doc_id = ${e} AND email_drop_id = ${s} ${n}
            ORDER BY sent_at DESC
            LIMIT 3
          `:await em.readSql`
            SELECT
              id,
              doc_id,
              sender,
              subject,
              sent_at,
              attachments,
              email_drop_id,
              account_email,
              LEFT(content_markdown, 4000) as content_markdown,
              LEFT(content_html, 4000) as content_html
            FROM emails
            WHERE doc_id = ${e} ${n}
            ORDER BY sent_at DESC
            LIMIT 3
          `;if(!l||0===l.length)return null;let i=l.map(e=>{let t=(0,ek.parseEmailString)(e.sender),a=new Date(e.sent_at?e.sent_at:0),r=e.content_markdown||"",s=e.content_html&&e.content_html.trim()?e.content_html:r?e_(r):"";return{message_id:e.id,sender_name:t.name,sender_email:t.email,formatted_date:(0,ek.formatDate)(a,2026===a.getFullYear()),formatted_time:(0,ek.formatTime)(a),preview_text:r.substring(0,300).replace(/\n/g," ").replace(/[*_#`]/g,""),preview_html:s,attachments:e.attachments||0}}).reverse();return{doc_id:l[0].doc_id,subject:l[0].subject||"(no subject)",messages:i,email_drop_id:l[0].email_drop_id||"original"}},[s],{revalidate:31536e3,tags:["thread-preview",`thread-preview-${e}`]})()}function eL(){return(0,eg.unstable_cache)(async()=>{let e=await ew();return 0===e.length?[]:(await em.readSql`
        SELECT doc_id, MAX(sent_at) as latest_date
        FROM emails
        WHERE release_batch = ANY(${e})
        GROUP BY doc_id
        ORDER BY (MAX(sent_at) IS NULL OR MAX(sent_at) < '1990-01-01' OR MAX(sent_at) > '2026-12-31'), MAX(sent_at) DESC NULLS LAST
      `).map(e=>({doc_id:e.doc_id,latest_date:e.latest_date}))},["all-thread-metadata"],{revalidate:3600,tags:["threads"]})()}function eO(){return(0,eg.unstable_cache)(async()=>{let e=await ew();if(0===e.length)return 0;let t=await em.readSql`
        SELECT COUNT(DISTINCT doc_id)::int as count
        FROM emails
        WHERE release_batch = ANY(${e})
      `;return t[0]?.count??0},["thread-metadata-count"],{revalidate:3600,tags:["threads"]})()}function eN(e,t){let a=Math.max(0,Math.floor(Number(e)||0)),r=Math.max(1,Math.floor(Number(t)||5e3));return(0,eg.unstable_cache)(async()=>{let e=await ew();return 0===e.length?[]:(await em.readSql`
        SELECT doc_id, MAX(sent_at) as latest_date
        FROM emails
        WHERE release_batch = ANY(${e})
        GROUP BY doc_id
        ORDER BY (MAX(sent_at) IS NULL OR MAX(sent_at) < '1990-01-01' OR MAX(sent_at) > '2026-12-31'), MAX(sent_at) DESC NULLS LAST
        LIMIT ${r} OFFSET ${a}
      `).map(e=>({doc_id:e.doc_id,latest_date:e.latest_date}))},[`thread-metadata-page-${a}-${r}`],{revalidate:3600,tags:["threads"]})()}async function eC(e){let{view:t="inbox",page:a=1,limit:r=100}=e,s=(a-1)*r,n=[];if("starred"===t&&0===(n=await (0,ef.getAllStarredThreadDocIds)()).length)return{threads:[],total:0,totalPages:0};let l="starred"===t&&n.length>0?em.readSql`SELECT COUNT(DISTINCT doc_id)::int as total FROM emails WHERE doc_id = ANY(${n})`:"sent"===t?em.readSql`SELECT COUNT(DISTINCT doc_id)::int as total FROM emails WHERE epstein_is_sender = true`:em.readSql`SELECT COUNT(DISTINCT doc_id)::int as total FROM emails`,[i]=await l,o=i?.total||0;if(0===o)return{threads:[],total:0,totalPages:0};let c="starred"===t&&n.length>0?em.readSql`
        SELECT doc_id, MAX(sent_at) as latest_date
        FROM emails
        WHERE doc_id = ANY(${n})
        GROUP BY doc_id
        ORDER BY (MAX(sent_at) IS NULL OR MAX(sent_at) < '1990-01-01' OR MAX(sent_at) > '2026-12-31'), MAX(sent_at) DESC NULLS LAST
        LIMIT ${r} OFFSET ${s}
      `:"sent"===t?em.readSql`
        SELECT doc_id, MAX(sent_at) as latest_date
        FROM emails
        WHERE epstein_is_sender = true
        GROUP BY doc_id
        ORDER BY (MAX(sent_at) IS NULL OR MAX(sent_at) < '1990-01-01' OR MAX(sent_at) > '2026-12-31'), MAX(sent_at) DESC NULLS LAST
        LIMIT ${r} OFFSET ${s}
      `:em.readSql`
        SELECT doc_id, MAX(sent_at) as latest_date
        FROM emails
        GROUP BY doc_id
        ORDER BY (MAX(sent_at) IS NULL OR MAX(sent_at) < '1990-01-01' OR MAX(sent_at) > '2026-12-31'), MAX(sent_at) DESC NULLS LAST
        LIMIT ${r} OFFSET ${s}
      `,h=await c;if(0===h.length)return{threads:[],total:o,totalPages:Math.ceil(o/r)};let d=h.map(e=>e.doc_id),p=await em.readSql`
    SELECT * FROM emails
    WHERE doc_id = ANY(${d})
    ORDER BY doc_id, sent_at ASC
  `,u=new Map;for(let e of p){let t=e$(e);u.has(t.doc_id)||u.set(t.doc_id,[]),u.get(t.doc_id).push(t)}let _=[];for(let e of h){let t=u.get(e.doc_id);t&&_.push(eT(e.doc_id,t))}let g=_.map(e=>e.messages[0].id),m=await (0,ef.getCachedStarCountsForMessages)(g),k=_.map(e=>({...e,starCount:m[e.messages[0].id]||0})),f=Math.ceil(o/r);return{threads:k,total:o,totalPages:f}}async function eI(e={}){return eC(e)}async function eM(e,t,a,r="all",s="primary",n=!1,l=eq,i=!1,o=!1){var c,h;let d=eE[r],p=n?[]:await ew();if(!n&&0===p.length)return{rows:[],total:0};let u=n?em.readSql`AND release_batches && ${l}`:em.readSql`AND release_batches && ${p} AND release_batches && ${l}`,_=eR(r)?em.readSql`AND has_drop_vol = true`:"original"===d?em.readSql`AND has_drop_original = true`:"yahoo_2"===d?em.readSql`AND has_drop_yahoo = true`:em.readSql``,g=i?em.readSql``:em.readSql`AND has_non_redacted = true`,m="sent"===e.type?em.readSql`AND has_sent = true`:"promotions"===s?em.readSql`AND has_promotional = true`:em.readSql`AND has_non_promotional = true`,k=o||n?em.readSql``:"yahoo_2"===d?em.readSql`AND latest_date <= ${ex}`:null===d||"original"===d?em.readSql`AND NOT (has_drop_yahoo = true AND has_drop_original = false AND has_drop_vol = false AND latest_date > ${ex})`:em.readSql``,f=(c=l,h=ev,c.length===h.length&&c.every((e,t)=>e===h[t])),b=null;if(!i&&f&&(o||n)){let t="sent"===e.type?`new_only_sent_${r}`:"promotions"===s?`new_only_promotions_${r}`:`new_only_primary_${r}`,a=await em.readSql`
      SELECT count FROM email_thread_rollup_stats WHERE key = ${t}
    `;b=a[0]?.count??null}if(null===b){let e=await em.readSql`
      SELECT COUNT(*)::int as total
      FROM email_thread_rollups r
      WHERE 1=1
        ${u}
        ${_}
        ${g}
        ${m}
        ${k}
    `;b=e[0]?.total??0}return 0===b?{rows:[],total:0}:{rows:await em.readSql`
    SELECT
      r.doc_id,
      r.latest_email_id as first_message_id,
      r.count,
      r.latest_subject as subject,
      r.latest_sender as sender,
      r.latest_preview_text as preview_text,
      r.max_attachments as attachments,
      r.latest_date as sent_at,
      r.latest_email_drop_id as email_drop_id,
      sc.count as star_count,
      e.epstein_is_sender as is_from_epstein
    FROM email_thread_rollups r
    LEFT JOIN emails e ON e.id = r.latest_email_id
    LEFT JOIN star_counts sc
      ON sc.entity_type = 'email_thread'
      AND sc.entity_id = r.doc_id
    WHERE 1=1
      ${u}
      ${_}
      ${g}
      ${m}
      ${k}
    ORDER BY r.latest_date DESC NULLS LAST
    LIMIT ${t} OFFSET ${a}
  `,total:b}}function eD(e){let t=(0,ek.parseEmailString)(e.sender),a=new Date(e.sent_at?e.sent_at:0),r=2026===a.getFullYear();return{doc_id:e.doc_id,firstMessageId:e.first_message_id,count:e.count,subject:e.subject||"(no subject)",latest_sender_name:t.name,latest_sender_email:t.email,formatted_date:(0,ek.formatDate)(a,r),preview:(e.preview_text||"").replace(/\n/g," ").replace(/[*_#`]/g,""),attachments:e.attachments,avatar_color:(0,ek.getAvatarColor)(e.sender||"unknown"),starCount:0,email_drop_id:e.email_drop_id||"original",latest_is_from_epstein:!0===e.is_from_epstein}}e_.setOptions({breaks:!0,gfm:!0,async:!1});let eq=[1,2,3,4,5,6,7,8],ev=[9,10,11,12];[...eq,...ev];let eF={};for(let e=1;e<=12;e++)eF[`vol-${e}`]=e;let ez=Object.keys(eF);function eP(e,t){return t&&eF[t]?[eF[t]]:e?ev:eq}function eB(t={}){let{view:a="inbox",page:r=1,limit:s=100,source:n="all",category:l="primary",showPostDeath:i=!1,isAdmin:o=!1,newReleasesOnly:c=!1,showRedactedBodies:h=!1}=t,d=t.batchFilter??(c?ev:eq),p=`thread-summaries-${a}-${r}-${s}-${n}-${l}-${i}-${o}-${d.join(",")}-${h}`;return(0,eg.unstable_cache)(async()=>{let t,c=(r-1)*s;if("starred"===a){let e=eE[n],t=o?[]:await ew();if(!o&&0===t.length)return{threads:[],total:0,totalPages:0};let a=o?em.readSql`AND e.release_batch = ANY(${d})`:em.readSql`AND e.release_batch = ANY(${t}) AND e.release_batch = ANY(${d})`,r=eR(n)?em.readSql`AND e.email_drop_id LIKE 'VOL%'`:e?em.readSql`AND e.email_drop_id = ${e}`:em.readSql``,l=i||o?em.readSql``:em.readSql`AND (e.email_drop_id != 'yahoo_2' OR e.sent_at <= ${ex})`,[{total:h}]=await em.readSql`
          SELECT COUNT(*)::int as total
          FROM star_counts sc
          WHERE sc.entity_type = 'email_thread'
          AND EXISTS (
            SELECT 1
            FROM emails e
            WHERE e.doc_id = sc.entity_id
            ${r} ${a} ${l}
          )
        `;return 0===h?{threads:[],total:0,totalPages:0}:{threads:(await em.readSql`
          WITH starred_threads AS (
            SELECT sc.entity_id as doc_id, sc.count::int as star_count
            FROM star_counts sc
            WHERE sc.entity_type = 'email_thread'
            AND EXISTS (
              SELECT 1
              FROM emails e
              WHERE e.doc_id = sc.entity_id
              ${r} ${a} ${l}
            )
            ORDER BY sc.count DESC
            LIMIT ${s} OFFSET ${c}
          ),
          latest_emails AS (
            SELECT DISTINCT ON (e.doc_id) e.doc_id, e.id as first_message_id, e.sender, e.subject,
              LEFT(e.content_markdown, 100) as preview_text, e.sent_at, e.email_drop_id, e.epstein_is_sender as is_from_epstein
            FROM emails e
            INNER JOIN starred_threads st ON e.doc_id = st.doc_id
            WHERE 1=1 ${r} ${a} ${l}
            ORDER BY e.doc_id, e.sent_at DESC
          )
          SELECT st.doc_id, le.first_message_id, st.star_count, le.subject, le.sender, le.preview_text,
            0 as count, 0 as attachments, le.sent_at, le.email_drop_id, le.is_from_epstein
          FROM starred_threads st
          INNER JOIN latest_emails le ON st.doc_id = le.doc_id
          ORDER BY st.star_count DESC
        `).map(e=>({...eD(e),starCount:e.star_count})),total:h,totalPages:Math.ceil(h/s)}}let{rows:p,total:u}=await eM("sent"===a?{type:"sent"}:{type:"inbox"},s,c,n,l,o,d,h,i);if(0===u||0===p.length)return{threads:[],total:u,totalPages:Math.ceil(u/s)||0};if(p[0]&&void 0!==p[0].star_count)t=p.map(e=>({...eD(e),starCount:Number(e.star_count)||0}));else{let a=p.map(e=>e.doc_id),{getCachedStarCountsForThreads:r}=await e.A(967742),s=await r(a);t=p.map(e=>({...eD(e),starCount:s[e.doc_id]||0}))}return{threads:t,total:u,totalPages:Math.ceil(u/s)}},[p],{revalidate:1800,tags:["threads","inbox"]})()}function eY(t,a=1,r=100,s,n=!1){let l=eb.CONTACT_FILTERS.find(e=>e.name.toLowerCase()===t.toLowerCase());if(!l)return Promise.resolve({threads:[],total:0,totalPages:1,contact:null,contactNotFound:!0});let i=`threads-by-contact-${t.toLowerCase()}-${a}-${r}-${s||"all"}-${n}`;return(0,eg.unstable_cache)(async()=>{let t=(a-1)*r,i=s?eE[s]:null,o=function(e){if(0===e.length)return em.sql`FALSE`;let t=e.flatMap(e=>{let t=e.toLowerCase();return t.includes("@")?[`%${t}%`,`%<${t}>%`,`%"${t}"%`]:[`% ${t} %`,`%${t}@%`]});return em.sql`all_participants ILIKE ANY(${t})`}(l.keywords),c=n?[]:await ew();if(!n&&0===c.length)return{threads:[],total:0,totalPages:0,contact:l,contactNotFound:!1};let h=eR(s)?em.readSql`AND email_drop_id LIKE 'VOL%'`:i?em.readSql`AND email_drop_id = ${i}`:em.readSql``,d=n?em.readSql``:em.readSql`AND release_batch = ANY(${c})`,p=await em.readSql`
        WITH matching_threads AS MATERIALIZED (
          SELECT DISTINCT doc_id
          FROM emails
          WHERE (${o})
          ${h}
          ${d}
        ),
        total AS (
          SELECT COUNT(*)::int as total FROM matching_threads
        ),
        thread_stats AS (
          SELECT
            e.doc_id,
            COUNT(*)::int as count,
            MAX(e.attachments)::int as max_attachments,
            MAX(e.sent_at) as latest_date
          FROM emails e
          INNER JOIN matching_threads mt ON e.doc_id = mt.doc_id
          WHERE 1=1 ${h} ${d}
          GROUP BY e.doc_id
          ORDER BY (MAX(e.sent_at) IS NULL OR MAX(e.sent_at) < '1990-01-01' OR MAX(e.sent_at) > '2026-12-31'), MAX(e.sent_at) DESC NULLS LAST
          LIMIT ${r} OFFSET ${t}
        ),
        latest_emails AS (
          SELECT DISTINCT ON (e.doc_id) 
            e.doc_id, e.id as first_message_id, e.sender, e.subject,
            LEFT(e.content_markdown, 100) as preview_text, e.sent_at, e.email_drop_id, e.epstein_is_sender as is_from_epstein
          FROM emails e
          INNER JOIN thread_stats ts ON e.doc_id = ts.doc_id
          WHERE 1=1 ${h} ${d}
          ORDER BY e.doc_id, e.sent_at DESC
        )
        SELECT 
          total.total,
          ts.doc_id, le.first_message_id, ts.count, le.subject, le.sender, le.preview_text,
          ts.max_attachments as attachments, le.sent_at, le.email_drop_id, ts.latest_date, le.is_from_epstein
        FROM total
        LEFT JOIN thread_stats ts ON TRUE
        LEFT JOIN latest_emails le ON ts.doc_id = le.doc_id
        ORDER BY (ts.latest_date IS NULL OR ts.latest_date < '1990-01-01' OR ts.latest_date > '2026-12-31'), ts.latest_date DESC NULLS LAST
      `,u=p[0]?.total||0;if(0===u)return{threads:[],total:0,totalPages:0,contact:l,contactNotFound:!1};let _=p.filter(e=>e.doc_id),g=_.map(e=>e.doc_id),{getCachedStarCountsForThreads:m}=await e.A(967742),k=await m(g),f=_.map(e=>{let t=(0,ek.parseEmailString)(e.sender),a=new Date(e.sent_at?e.sent_at:0),r=2026===a.getFullYear();return{doc_id:e.doc_id,firstMessageId:e.first_message_id,count:e.count,subject:e.subject||"(no subject)",latest_sender_name:t.name,latest_sender_email:t.email,formatted_date:(0,ek.formatDate)(a,r),preview:(e.preview_text||"").replace(/\n/g," ").replace(/[*_#`]/g,""),attachments:e.attachments,avatar_color:(0,ek.getAvatarColor)(e.sender||"unknown"),starCount:k[e.doc_id]||0,email_drop_id:e.email_drop_id||"original",latest_is_from_epstein:!0===e.is_from_epstein}}),b=Math.ceil(u/r);return{threads:f,total:u,totalPages:b,contact:l,contactNotFound:!1}},[i],{revalidate:3600,tags:["threads","person"]})()}function eU(t,a=1,r=100,s=!1){if(0===t.length)return Promise.resolve({threads:[],total:0,totalPages:1});let n=`threads-by-docids-${t.slice().sort().join(",")}-${a}-${r}-${s}`;return(0,eg.unstable_cache)(async()=>{let n=(a-1)*r,l=s?[]:await ew();if(!s&&0===l.length)return{threads:[],total:0,totalPages:0};let i=s?em.readSql``:em.readSql`AND release_batch = ANY(${l})`,o=await em.readSql`
        WITH matching_threads AS MATERIALIZED (
          SELECT DISTINCT doc_id
          FROM emails
          WHERE doc_id = ANY(${t})
          ${i}
        ),
        total AS (
          SELECT COUNT(*)::int as total FROM matching_threads
        ),
        thread_stats AS (
          SELECT
            e.doc_id,
            COUNT(*)::int as count,
            MAX(e.attachments)::int as max_attachments,
            MAX(e.sent_at) as latest_date
          FROM emails e
          INNER JOIN matching_threads mt ON e.doc_id = mt.doc_id
          WHERE 1=1 ${i}
          GROUP BY e.doc_id
          ORDER BY (MAX(e.sent_at) IS NULL OR MAX(e.sent_at) < '1990-01-01' OR MAX(e.sent_at) > '2026-12-31'), MAX(e.sent_at) DESC NULLS LAST
          LIMIT ${r} OFFSET ${n}
        ),
        latest_emails AS (
          SELECT DISTINCT ON (e.doc_id)
            e.doc_id, e.id as first_message_id, e.sender, e.subject,
            LEFT(e.content_markdown, 100) as preview_text, e.sent_at, e.email_drop_id, e.epstein_is_sender as is_from_epstein
          FROM emails e
          INNER JOIN thread_stats ts ON e.doc_id = ts.doc_id
          WHERE 1=1 ${i}
          ORDER BY e.doc_id, e.sent_at DESC
        )
        SELECT
          total.total,
          ts.doc_id, le.first_message_id, ts.count, le.subject, le.sender, le.preview_text,
          ts.max_attachments as attachments, le.sent_at, le.email_drop_id, ts.latest_date, le.is_from_epstein
        FROM total
        LEFT JOIN thread_stats ts ON TRUE
        LEFT JOIN latest_emails le ON ts.doc_id = le.doc_id
        ORDER BY (ts.latest_date IS NULL OR ts.latest_date < '1990-01-01' OR ts.latest_date > '2026-12-31'), ts.latest_date DESC NULLS LAST
      `,c=o[0]?.total||0;if(0===c)return{threads:[],total:0,totalPages:0};let h=o.filter(e=>e.doc_id),d=h.map(e=>e.doc_id),{getCachedStarCountsForThreads:p}=await e.A(967742),u=await p(d),_=h.map(e=>{let t=(0,ek.parseEmailString)(e.sender),a=new Date(e.sent_at?e.sent_at:0),r=2026===a.getFullYear();return{doc_id:e.doc_id,firstMessageId:e.first_message_id,count:e.count,subject:e.subject||"(no subject)",latest_sender_name:t.name,latest_sender_email:t.email,formatted_date:(0,ek.formatDate)(a,r),preview:(e.preview_text||"").replace(/\n/g," ").replace(/[*_#`]/g,""),attachments:e.attachments,avatar_color:(0,ek.getAvatarColor)(e.sender||"unknown"),starCount:u[e.doc_id]||0,email_drop_id:e.email_drop_id||"original",latest_is_from_epstein:!0===e.is_from_epstein}}),g=Math.ceil(c/r);return{threads:_,total:c,totalPages:g}},[n],{revalidate:3600,tags:["threads","topics"]})()}function ej(e="all",t=!1,a){let r=a?`promotions-info-${e}-batch-${a.join(",")}`:`promotions-info-${e}-${t}`;return(0,eg.unstable_cache)(async()=>{let{threads:r,total:s}=await eB({view:"inbox",page:1,limit:1,source:e,category:"promotions",newReleasesOnly:t,batchFilter:a});return{count:s,preview:r[0]?{sender:r[0].latest_sender_name,subject:r[0].subject}:void 0}},[r],{revalidate:1800,tags:["promotions"]})()}e.s(["THREAD_PREVIEW_TTL_SECONDS",0,31536e3,"VALID_VOLUME_SLUGS",0,ez,"VOLUME_SLUG_TO_BATCH_ID",0,eF,"getAllThreadMetadata",()=>eL,"getCachedPromotionsInfo",()=>ej,"getReleasedBatchIds",0,ew,"getReleasedBatchesWithNames",0,eS,"getThread",()=>eA,"getThreadMetadataCount",()=>eO,"getThreadMetadataPaginated",()=>eN,"getThreadPreview",()=>ey,"getThreadSummaries",()=>eB,"getThreads",()=>eI,"getThreadsByContact",()=>eY,"getThreadsByDocIds",()=>eU,"resolveBatchFilter",()=>eP],719820)}]);