class s{constructor(s){this.parser=s,this.isManager=!0}async dispose(){await this.reset(),delete this.parser}async assert(s,e,t){const a=1==s();return a&&e.push(t),!a}async validate(s,e){if(null!=s.elements)for(let t of s.elements)await this.parser.validateItem(t,e)}async reset(){}}export{s as BaseManager};
