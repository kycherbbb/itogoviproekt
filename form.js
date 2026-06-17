<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мерч</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<header class="header">
    <div class="nav-wrapper">
        <div class="logo">Yung Trappa</div>
        <div class="burger" id="burger">☰</div>

        <nav class="nav" id="nav">
            <a href="index.html">Главная</a>
            <a href="music.html">Творчество</a>
            <a href="empty.html">Мерч</a>
        </nav>
    </div>
</header>

<main class="containerr"><br><br>
    <h2>Покупка мерча</h2><br><br>
    <form id="orderForm">
        <input type="text" placeholder="ФИО" required>
        <input type="email" placeholder="Email" required>
        <input type="tel" placeholder="Телефон" required>
        <input type="date" required>

        <select required>
            <option value="">Размер</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
        </select>

        <button type="submit">Купить</button>
    </form>
</main> 

<footer>
    <div class="div-footer">
        <p>© 2026 Yung Trappa Fan Site</p>
    </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>