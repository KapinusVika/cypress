
class popularPrimeryComponent{

    titleLabel = 'span.foreign_goods__name>a[title]'

    getNamePopularItem (){
        cy.get(this.titleLabel).first().then(($fav) => {
            const favEmail = $fav.text()
        })
    }

    openPopularItemPage () {
        cy.get(this.titleLabel).click
    }

} export default popularPrimeryComponent