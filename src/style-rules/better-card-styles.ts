export const BETTER_CARD_STYLES = `
    .better-cards .wb-grid-row {
        padding-top: 32px;
    }
    
    .better-cards .card {
        border-radius: 14px;
        border-radius: 14px;
    overflow:unset;
        border: 1px solid transparent;
    }
    
    .better-cards .card-img-top {
        position: absolute;
        width: 110px;
        border-radius: 14px !important;
        overflow: hidden;
        left: 18px;
        top: -32px;
        -webkit-box-shadow: 0 15px 40px 0 rgba(0, 18, 68, 0.16) !important;
        box-shadow:  0 15px 40px 0 rgba(0, 18, 68, 0.16) !important;
    }
    .better-cards h5.card-title {
        font-weight: 700 !important;
        padding-left: 130px;
        padding-top: 14px;
    }
    
    .better-cards h6.card-subtitle {
        color: #f2366e !important;
        font-weight: 700 !important;
        font-size: 14px;
        padding-left: 130px;
    }
    
    .better-cards .card-text {
        font-size: 13px;
        line-height: 1.6em;
    }
    
    .better-cards .wb-grid-row .col-md-4 {
        padding-left: 0px;
        padding-right: 0px;
    }
    
    .better-cards .col-md-4>section, .better-cards .col-md-4 .pagelet-wrapper, .better-cards .col-md-4 .pagelet-wrapper-inner, .better-cards .col-md-4 .card {
        height: 100%;
    }
    
    .better-cards .col-md-4 section.new-proposal {
        height:auto;
    }
    
    .better-cards .col-md-4 {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    
    @media (max-width: 1239px) {
        .better-cards .wb-grid-row .col-md-4 {
            flex:unset;
            max-width:100%;
        }
    }
`;
