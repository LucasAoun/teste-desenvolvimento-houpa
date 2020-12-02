-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02-Dez-2020 às 16:50
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `houpadb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `product`
--

CREATE TABLE `product` (
  `id_product` int(11) NOT NULL,
  `name_product` varchar(80) NOT NULL,
  `description` varchar(150) NOT NULL,
  `pquantity` int(11) NOT NULL,
  `mquantity` int(11) NOT NULL,
  `gquantity` int(11) NOT NULL,
  `ggquantity` int(11) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `id_store` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `product`
--

INSERT INTO `product` (`id_product`, `name_product`, `description`, `pquantity`, `mquantity`, `gquantity`, `ggquantity`, `photo`, `id_store`, `price`) VALUES
(1, 'Blusa Feminina Básica Manga Curta Marisa', '- Camiseta masculina - Manga curta - Gola redonda - Estampa super herói escudo capitão - Marca: Marvel - Tecido: meia malha - Composição: 100% algodão', 20, 20, 50, 30, '1606915275114=image-product.png', 1, 57),
(2, 'Blusa Feminina Básica Manga Curta Marisa', '- Camiseta masculina - Manga curta - Gola redonda - Estampa super herói escudo capitão - Marca: Marvel - Tecido: meia malha - Composição: 100% algodão', 20, 20, 50, 30, '1606918106109=image-product.png', 1, 57),
(3, 'Blusa Feminina Básica Manga Curta Marisa', '- Camiseta masculina - Manga curta - Gola redonda - Estampa super herói escudo capitão - Marca: Marvel - Tecido: meia malha - Composição: 100% algodão', 20, 20, 50, 30, '1606918111772=image-product.png', 1, 57),
(4, 'Blusa Feminina Básica Manga Curta Marisa', '- Camiseta masculina - Manga curta - Gola redonda - Estampa super herói escudo capitão - Marca: Marvel - Tecido: meia malha - Composição: 100% algodão', 20, 20, 50, 30, '1606918128227=image-product.png', 1, 57);

-- --------------------------------------------------------

--
-- Estrutura da tabela `store`
--

CREATE TABLE `store` (
  `id_store` int(11) NOT NULL,
  `name_store` varchar(80) NOT NULL,
  `thumb` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `store`
--

INSERT INTO `store` (`id_store`, `name_store`, `thumb`) VALUES
(1, 'Madame Ristow', '1606915147231=avatar 152 x 152px.png'),
(2, 'Madame Ristow', '1606918143432=avatar 152 x 152px.png');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `fk_product` (`id_store`);

--
-- Índices para tabela `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id_store`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `product`
--
ALTER TABLE `product`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `store`
--
ALTER TABLE `store`
  MODIFY `id_store` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product` FOREIGN KEY (`id_store`) REFERENCES `store` (`id_store`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
