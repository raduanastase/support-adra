<div class="columns small-12">
    <div class="row">
        <div class="medium-6 medium-centered large-4 large-centered columns text-center">
            <img class="logo" src="img/adra.png">
        </div>
    </div>
    <?php
    if ((isset($_SESSION['user']))) : ?>
        <a href="../logout.php" class="button log-out-button">Logout</a>
    <?php endif;
    ?>
    <button class="button add-case-button" data-open="add-case-modal">Adaugă caz</button>
</div>