<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <h2>RESTRAUNT</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>name</th>
        <th>price</th>
        <th>description</th>
        <th>quantity</th>
        <th>calories</th> 
      </tr>
      <xsl:for-each select="RESTRAUNT/FOOD_ITEMS">
      <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="price"/></td>
      <td><xsl:value-of select="description"/></td>
      <xsl:for-each select="quantity">
        <td>
          <xsl:value-of select="q"/>
          <xsl:value-of select="qt"/>
        </td>
      </xsl:for-each>
      <td><xsl:value-of select="calories"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>




