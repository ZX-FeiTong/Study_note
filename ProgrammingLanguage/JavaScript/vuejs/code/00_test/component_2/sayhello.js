const tpl = `
    <div>
        <h1>你好， {{ you }}！</h1>
        <input type="text" v-model="you" />
    </div>
`;
    
const sayhello = {
    template: tpl,
    props : ['who'],
    data : function() {
        return {
            you: this.who
        }
    }
};

export default sayhello;