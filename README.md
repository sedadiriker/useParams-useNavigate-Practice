## `useNavigate` Hook Nedir?

`useNavigate` Hooku, React Router kütüphanesindeki bir hookdur ve React Router tarafından sağlanır. Bu hooku kullanarak, React uygulamanız içindeki farklı rotalara yönlendirme işlemlerini gerçekleştirebilirsiniz.

## Kullanım

1. İlk olarak, `useNavigate` hookunu bileşeninize import etmelisiniz:

    ```javascript
    import { useNavigate } from "react-router-dom";
    ```

2. Daha sonra, bileşeninizde `useNavigate` hookun kullanarak bir `navigate` işlevi alırsınız:

    ```javascript
    const navigate = useNavigate();
    ```

3. `navigate` işlevini kullanarak istediğiniz zaman belirli bir rotaya yönlendirme yapabilirsiniz. Örneğin:

    ```javascript
    navigate("/another-page");
    ```

    Yukarıdaki örnekte, `/another-page` rotasına yönlendirme yapılıyor.

Bu şekilde, kullanıcı etkileşimleri veya belirli koşullar gerçekleştiğinde uygulamanızı farklı rotalara yönlendirebilirsiniz.


## `useParams` Hook Nedir?

`useParams` hooku, React Router kütüphanesindeki bir hookdur ve React Router tarafından sağlanır. Bu hooku kullanarak, URL'den parametre değerlerini alabilirsiniz. Özellikle, dinamik rotalarla çalışırken URL'den gelen parametreleri kullanmanız gerektiğinde `useParams` hookunu kullanabilirsiniz.

## Kullanım

1. İlk olarak, `useParams` hookunu bileşeninize import etmelisiniz:

    ```javascript
    import { useParams } from "react-router-dom";
    ```

2. Daha sonra, bileşeninizde `useParams` hookunu kullanarak URL'den parametre değerlerini alabilirsiniz:

    ```javascript
    const params = useParams();
    ```

3. `params` nesnesini kullanarak URL'den gelen parametre değerlerine erişebilirsiniz. Örneğin, bir URL'de `/user/:id` gibi bir parametre tanımlanmışsa:

    ```javascript
    const { id } = params;
    ```

    Yukarıdaki örnekte, URL'den gelen `id` parametre değerini `params` nesnesinden alıyoruz.

Bu şekilde, dinamik rotalarla çalışırken URL'den gelen parametre değerlerini bileşenlerinizde kullanabilirsiniz.
