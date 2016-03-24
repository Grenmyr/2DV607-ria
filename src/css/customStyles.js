const primaryColor = '#FFF';
const accentColor = '#536DFE';

export const cardStyles = Object.freeze({
    card: {
        width: 320,
        height: 320
    },
    singleCard:{
        width: 320,
        height: 320,
        margin: 'auto'
    },
    bigCard: {
        width: 400,
        height: 580,
        margin: 'auto'
    },
    smallCard: {
        width: 320,
        height: 160,
        margin: 'auto'
    },
    cardTitle: {
        background: `url(http://www.getmdl.io/assets/demos/dog.png)
                        bottom right 15% no-repeat #46B6AC`
    },
    contactBackground: {
        background: `url(https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAVSAAAAJGZlZDJkNWEzLWI4MmItNDZiMC05ZDlhLThiYzAyMGJlYTRmNQ.jpg)
         right no-repeat #46B6AC`
    },
    cardSubTitle: {
        fontWeight:700,
        fontSize:'105%',
        padding:10
    },
    cardRow: {
        borderBottom: '1px solid #46B6AC',
        padding: 5
    },
    cardRowTitle: {
        fontWeight:600,
        fontSize:'105%'
    },
    portfolioItemPopupWindow: {
        margin:'auto',
        width: '80%',
        zIndex: 10,
        minWidth: '340px'
    },
    portfolioOverlayWindow:{
        display: 'block',
        position: 'fixed',
        top: '0%',
        left: '0%',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        zIndex:5,
        opacity:.80
    },
    sharedCardStyle: {
        titleSpan: {color: primaryColor, fontSize: '24px', fontWeight: '500'},
        cardActions: {height: '120px', background: accentColor},
        cardText: {
            fontWeight: 700,
            fontSize: '105%',
            textColor: accentColor
        },
        cardTitle: {color: primaryColor},
        span: {color: primaryColor, fontSize: '24px', fontWeight: '500'},
    }
});
