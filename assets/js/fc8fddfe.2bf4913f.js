"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9212],{9388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=n(5893),o=n(1151);const a={},r="Post",c={id:"concepts/post",title:"Post",description:"The post is a data concept in TaskWeaver which contains a single message in the conversation.",source:"@site/docs/concepts/post.md",sourceDirName:"concepts",slug:"/concepts/post",permalink:"/TaskWeaver/docs/concepts/post",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/concepts/post.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Round",permalink:"/TaskWeaver/docs/concepts/round"},next:{title:"Attachment",permalink:"/TaskWeaver/docs/concepts/attachment"}},i={},h=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"post",children:"Post"}),"\n",(0,s.jsx)(t.p,{children:"The post is a data concept in TaskWeaver which contains a single message in the conversation."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'@dataclass\nclass Post:\n    """\n    A post is the message used to communicate between two roles.\n    It should always have a text_message to denote the string message,\n    while other data formats should be put in the attachment.\n    The role can be either a User, a Planner, or others.\n\n    Args:\n        id: the unique id of the post.\n        send_from: the role who sends the post.\n        send_to: the role who receives the post.\n        message: the text message in the post.\n        attachment_list: a list of attachments in the post.\n\n    """\n\n    id: str\n    send_from: RoleName\n    send_to: RoleName\n    message: str\n    attachment_list: List[Attachment]\n'})}),"\n",(0,s.jsxs)(t.p,{children:["A post is the message used to communicate between two roles. It should always have a text ",(0,s.jsx)(t.code,{children:"message"})," to denote the string message.\nIn addition, a post has ",(0,s.jsx)(t.code,{children:"send_from"})," and ",(0,s.jsx)(t.code,{children:"send_to"})," roles, which are the roles who send and receive the post, respectively.\nIn some cases, the ",(0,s.jsx)(t.code,{children:"send_from"})," and ",(0,s.jsx)(t.code,{children:"send_to"})," roles are the same, to denote the self-communication of the role."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"attachment_list"})," is a list of ",(0,s.jsx)(t.a,{href:"/TaskWeaver/docs/concepts/attachment",children:"attachments"})," in the post.\nThe attachment is used to store various data other than the text message, such as the code snippet or an artifact file path.\nAn attachment may be used only by the role who sends the post, or it may be used by the role who receives the post."]}),"\n",(0,s.jsxs)(t.p,{children:["In usual cases, the ",(0,s.jsx)(t.code,{children:"message"})," will present in the prompt as the past chat rounds.\nHowever, the message can sometimes be too long and should only be kept in the current round.\nIn the next round, the message will be deleted from the prompt to keep the prompt short.\nAs an example, the CodeInterpreter may generate a long execution result, which only needs to be kept in the current round.\nIn this case, we provide a way of annotating the message (or part of the message) to be kept in the current round only."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"message = PromptUtil.wrap_text_with_delimiter(message, delimiter=PromptUtil.DELIMITER_TEMPORAL)\n"})}),"\n",(0,s.jsx)(t.p,{children:"In this way, the message will be kept in the current round only, and will not be presented in the prompt since the next round."})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);