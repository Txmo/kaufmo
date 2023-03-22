interface Brand {
    id: number;
    name: string;
}

export class BrandData {
    private data: Array<Brand>;
    constructor(data: Array<Brand>) {
        this.data = data;
    }

    getData(): Array<Brand> {
        return this.data;
    }

    getJSONString(): string {
        return JSON.stringify(this.data);
    }
}

export default class WikiParser {
    static logUpdatedJSON(): void {
        const parser = new WikiParser();
        const nodeList = document.querySelectorAll('.div-col > ul > li');
        console.log(parser
            .parse(nodeList as NodeListOf<HTMLLIElement>)
            .getJSONString()
        )
    }
    parse(listElements: NodeListOf<HTMLLIElement>): BrandData {
        const brands: Array<Brand> = [];
        let count = 0;
        listElements.forEach((li) => {
            const children: NodeListOf<HTMLLIElement> = li.querySelectorAll('ul > li') as NodeListOf<HTMLLIElement>;
            const name: string = li.innerText.split('\n')[0];
            if (children.length > 0) {
                children.forEach((inner) => {
                    brands.push({ id: ++count, name: `${name} - ${inner.innerText}` })
                });
            } else {
                brands.push({ id: ++count, name: name });
            }
        });
        return new BrandData(brands);
    }
}