describe('Demo Tests',function (){
    it('CGM Test', async () => {
        await browser.url('https://demo.clickdoc.de/cd-de/')
        
        await browser.pause(2000)

        const CookieButton = await $('button[class="consent-button agree-necessary-cookie"]')

        await CookieButton.click()

        await browser.pause(2000)
        
        const Search = await $('[data-web-test="lp-search-input"]')
        
        await $(Search).addValue('Peter Test')

        const City = await $('[class="search-card-city ng-star-inserted"]')

        await browser.pause(2000)

        await expect (City).toHaveText('Neuwied')
        
        await browser.pause(2000)
        
        await City.click()

        await browser.pause(2000)

        const Zeiten = await $('[class="content__days"]')

        const Table = Zeiten.getText()


        const Wochentag = ["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]
        const T = new Date()
        let Tag = Wochentag[T.getDay()]

        const Mo = (await Table).slice(20, 63)
        const Di = (await Table).slice(64, 107)
        const Mi = (await Table).slice(108, 129)
        const Do = (await Table).slice(130, 173)
        const Fr = (await Table).slice(174, 217)
        
        const MoZeiten = "09:00 Uhr\n-\n12:00 Uhr\n14:00 Uhr\n-\n18:00 Uhr"
        const DiZeiten = "09:00 Uhr\n-\n12:00 Uhr\n14:00 Uhr\n-\n18:00 Uhr"
        const MiZeiten = "09:00 Uhr\n-\n14:00 Uhr"
        const DoZeiten = "09:00 Uhr\n-\n12:00 Uhr\n14:00 Uhr\n-\n18:00 Uhr"
        const FrZeiten = "09:00 Uhr\n-\n12:00 Uhr\n14:00 Uhr\n-\n18:00 Uhr"

        
        switch (Tag) {
            case 'Mo.':
                console.log("Heute ist Montag")
                if (Mo == MoZeiten) {
                    console.log("richtig")
                } else {
                    console.log("falsch")
                }
                break
            case 'Di.':
                console.log("Heute ist Dienstag")
                if (Di == DiZeiten) {
                    console.log("richtig")
                } else {
                    console.log("falsch")
                }
                break
            case 'Mi.':
                console.log("Heute ist Mittwoch")
                if (Mi == MiZeiten) {
                    console.log("richtig")
                } else {
                    console.log("falsch")
                }
                break
            case 'Do.':
                console.log("Heute ist Donnerstag")
                if (Do == DoZeiten) {
                    console.log("richtig")
                } else {
                    console.log("falsch")
                }
                break
            case 'Fr.':
                console.log("Heute ist Freitag")
                if (Fr == FrZeiten) {
                    console.log("richtig")
                } else {
                    console.log("falsch")
                }
                break
            case 'Sa.':
                console.log("Heute ist Samstag und deswegen ist zu")
                break
            case 'So.':
                console.log("Heute ist Sonntag und deswegen ist zu")
                break
        }
    
    })
})