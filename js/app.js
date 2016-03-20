$(function () {

    var CALL_ACCEPTED = 'accepted';
    var CALL_PENDING = 'pending';
    var CALL_APPROVED = 'approved';
    var CALL_REJECTED = 'rejected';
    var MODAL_VIEW_VALUES = [
        ['.reporter-last-name', 'reporter_last_name'],
        ['.reporter-first-name', 'reporter_first_name'],
        ['.reporter-cnp', 'reporter_cnp'],
        ['.reporter-ci-series', 'reporter_ci_series'],
        ['.reporter-ci-number', 'reporter_ci_number'],
        ['.reporter-phone', 'reporter_phone'],
        ['.reporter-email', 'reporter_email'],
        ['.person-last-name', 'person_last_name'],
        ['.person-name', 'person_first_name'],
        ['.person-cnp', 'person_cnp'],
        ['.person-ci-series', 'person_ci_series'],
        ['.person-ci-number', 'person_ci_number'],
        ['.person-region', 'person_region'],
        ['.person-city', 'person_city'],
        ['.person-address', 'person_address'],
        ['.person-description', 'person_description'],
        ['.person-money-total', 'person_money_total'],
        ['.person-money-partial', 'person_money_partial']
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
        //getCases(CALL_ACCEPTED);
        getCase('1');
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
        data.forEach(function (element, index) {
            $cases.push($viewCaseTemplate.clone());
            THUMBNAIL_VALUES.forEach(function (value) {
                $cases[index].find(value[0]).text(element[value[1]]);
            });
        });

    }

    function onGetCasesError(data) {
        $errorModal.foundation('open');
    }

    function getCase(id) {
        $.ajax({
            type: 'GET',
            url: 'data.php?case_id=' + id,
            dataType: 'json',
            success: onGetCaseSuccess,
            error: onGetCaseError
        })
    }

    function onGetCaseSuccess(data) {
        MODAL_VIEW_VALUES.forEach(function (value) {
            $viewCaseModal.find(value[0]).text(element['0'][0][value[1]]);
        });
    }

    function onGetCaseError(data) {
        $errorModal.foundation('open');
    }

    init();
});


$(document).foundation();

