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
    homeViewCard:{
        width: 420,
        height: 420,
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
    colors:{
        accentColor :'#536DFE',
        textColor: 'rgba(0,0,0, 0.54)',
        primaryColor: '#FFF'
    },
    cardText:{
        fontWeight:700,
        fontSize:'105%',
        textColor: '#536DFE'
    },
    standardSingleCard: {
            cardActions: {height: '120px', background: '#536DFE'},
            card: {
                width: 420,
                height: 420,
                margin: 'auto'
            },
            cardTitle: Object.assign({
                color: '#fff'
            }),
            span: {color: '#FFF', fontSize: '24px', fontWeight: '500'},
            cardText : {
                fontWeight:700,
                fontSize:'105%',
                textColor: '#536DFE'
            }
    },
    heroCard: {
        position: 'absolute',
        top: '25%',
        left: '25%',
        zIndex: '100',
        backgroundColor: 'red'
    }
});
