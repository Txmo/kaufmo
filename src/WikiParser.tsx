export { };

interface Brand {
    name: string;
}

export default class WikiParser {

    static parse(): string {
        const container: Element | null = document.querySelector('#wiki-container');
        if (container === null) {
            console.error('Unable to find container element');
            return '';
        }
        const listElements: NodeListOf<HTMLLIElement> = document.querySelectorAll('.div-col > ul > li');
        const brands: Array<Brand> = [];
        listElements.forEach((li) => {
            const children: NodeListOf<HTMLLIElement> = li.querySelectorAll('ul > li') as NodeListOf<HTMLLIElement>;
            const name: string = li.innerText.split('\n')[0];
            if (children.length > 0) {
                children.forEach((inner) => {
                    brands.push({ name: `${name} - ${inner.innerText}` })
                });
            } else {
                brands.push({ name: name });
            }
        });
        console.log(brands);
        return '';
    }
}