
const handler = {
    get(target, property) {
        return function(strings, ...values) {
            console.log("Property (tag):", property);
            console.log("Strings:", strings);
            console.log("Values:", values);
            return `<${property}></${property}>`; // 예시 반환 값입니다.
        };
    }
};

const test = new Proxy({}, handler);

const result1 = test.div`This is a template string with a ${"value"}.`;
console.log(result1); // <div></div>

const result2 = test.a`Another template string with ${"another value"}.`;
console.log(result2); // <a></a>
