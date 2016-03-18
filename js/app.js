$(function () {

    var CALL_ACCEPTED = 'accepted';
    var CALL_PENDING = 'pending';
    var CALL_APPROVED = 'approved';
    var CALL_REJECTED = 'rejected';
    var $errorModal = $('#error-modal');
    var $viewCaseTemplate = $('.view-case-template');
    var $addCaseForm = $('#add-case-form');


    function init() {
        getCases(CALL_ACCEPTED);
        //getCase('1');
    }

    function getCases(typeOfCases) {
        $.ajax({
            type:'GET',
            url: '37.139.17.52/data.php?' + typeOfCases,
            dataType: 'json',
            success: onGetCasesSuccess,
            error: onGetCasesError
        })
    }

    function onGetCasesSuccess(data) {
        $viewCaseTemplate
    }

    function onGetCasesError(data) {
        $errorModal.foundation('open');
    }

    function getCase(id) {
        $.ajax({
            type:'GET',
            url: 'data.php?case_id='+id,
            dataType: 'json',
            success: onGetCaseSuccess,
            error: onGetCaseError
        })
    }

    function onGetCaseSuccess(data) {

    }

    function onGetCaseError(data) {

    }

    init();
});


$(document).foundation();

