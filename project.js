document.addEventListener('DOMContentLoaded', () => {
'use strict';
const p=window.PORTFOLIO_CONTENT?.projects.find(item=>item.id===new URLSearchParams(window.location.search).get('id'));
const container=document.getElementById('case-study-content');
function node(tag,className,text){const el=document.createElement(tag);if(className)el.className=className;if(text!==undefined)el.textContent=String(text);return el;}
function createLink(href,text,extra=''){const a=node('a','button '+extra,text);a.href=href;a.target='_blank';a.rel='noopener noreferrer';return a;}
if(!p){container.replaceChildren(node('h1','','Project not found'),node('p','','This case study is not available. Return to selected work to explore the published projects.'));document.title='Project not found — Pablo Alvarez Garcia';}
else{
  document.title=p.title+' — Pablo Alvarez Garcia';container.replaceChildren();const hero=node('div','case-hero');hero.append(node('div','section-index',p.number+' / '+p.category),node('h1','',p.title),node('p','case-subtitle',p.subtitle));const tags=node('div','tags case-tags');p.tags.forEach(t=>tags.append(node('span','tag',t)));hero.append(tags);const actions=node('div','case-actions');if(p.demoUrl)actions.append(createLink(p.demoUrl,'Open application ↗','button-primary'));if(p.sourceUrl)actions.append(createLink(p.sourceUrl,'View source on GitHub ↗','button-primary'));hero.append(actions);container.append(hero);
  const columns=node('div','case-columns');const ctx=node('div');ctx.append(node('h2','','Context'),node('p','',p.context));const built=node('div');built.append(node('h2','','What I built'),node('p','',p.contribution));columns.append(ctx,built);container.append(columns);
  container.append(node('h2','case-heading','Included functionality'));const list=node('ul','case-feature-list');p.features.forEach(f=>list.append(node('li','',f)));container.append(list);
  const note=node('div','case-note');note.append(node('strong','','Project note: '),document.createTextNode(p.qualification));container.append(note);
}

});
