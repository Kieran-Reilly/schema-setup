async function s(s){const r=new a(s);return await r.parser.initialize(),r}"undefined"!=typeof self&&(self.crs=self.crs||{},self.crs.createSchemaLoader=s);class a{constructor(s){this.parser=s}async dispose(){await this.parser.dispose(),this.parser=null}async validate(s){const a=[];return await this.parser.validate(s,a),a}async parse(s){return await this.parser.parse(s)}async load(s){await this.parser.load(s)}async register(s){await this.parser.register(s)}}export{s as createSchemaLoader};