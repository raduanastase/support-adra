$(function () {

    var CALL_ACCEPTED = 'accepted';
    var CALL_PENDING = 'pending';
    var CALL_APPROVED = 'approved';
    var CALL_REJECTED = 'rejected';
    var MODAL_VIEW_VALUES = [
        ['.reporter-surname-text', 'xxx'],
        ['.reporter-name-text', 'xxx'],
        ['.reporter-cnp', 'xxx'],
        ['.reporter-bi-series', 'xxx'],
        ['.reporter-bi-number', 'xxx'],
        ['.reporter-phone', 'xxx'],
        ['.reporter-email', 'xxx'],
        ['.person-surname', 'xxx'],
        ['.person-name', 'xxx'],
        ['.person-cnp', 'xxx'],
        ['.person-bi-series', 'xxx'],
        ['.person-bi-number', 'xxx'],
        ['.person-region', 'xxx'],
        ['.person-city', 'xxx'],
        ['.person-address', 'xxx'],
        ['.person-description', 'xxx'],
        ['.person-money-total', 'xxx'],
        ['.person-money-partial', 'xxx']
    ];
    var THUMBNAIL_VALUES = [
        ['.thumnail-img', 'xxx'],
        ['.case-name', 'xxx'],
        ['.case-description', 'xxx']
    ];

    var $errorModal = $('#error-modal');
    var $viewCaseTemplate = $('.view-case-template');
    var $addCaseForm = $('#add-case-form');
    var $viewCaseModal = $('#view-case-modal');
    var $cases = [];




    function init() {
        getCases(CALL_ACCEPTED);
        //getCase('1');
    }

    function getCases(typeOfCases) {
        $.ajax({
            type: 'GET',
            url: 'data.php?' + typeOfCases,
            dataType: 'json',
            success: onGetCasesSuccess,
            error: onGetCasesError
        })
    }

    function onGetCasesSuccess(data) {
        if(data.success) {
            data.forEach(function (element, index) {
                $cases.push($viewCaseTemplate.clone());
                THUMBNAIL_VALUES.forEach(function (value) {
                    $cases[index].find(value[0]).text(element[value[1]]);
                });
            });
        } else {
            onGetCasesError();
        }
    }

    function onGetCasesError(data) {
        $errorModal.foundation('open');
    }

    function getCase(id) {
        $.ajax({
            type: 'GET',
            url: 'data.php?case_id=' + id,
            dataType: 'json',
            data: '1',
            success: onGetCaseSuccess,
            error: onGetCaseError
        })
    }

    function onGetCaseSuccess(data) {
        if(data.success) {
            MODAL_VIEW_VALUES.forEach(function (value) {
                $viewCaseModal.find(value[0]).text(element['0'][0][value[1]]);
            });
        } else {
            onGetCaseError();
        }
    }

    function onGetCaseError(data) {
        $errorModal.foundation('open');
    }

    init();
});


$(document).foundation();

